import { useState, useEffect, useRef } from "react";
import useTodoStore from "../store/todoStore";
import AddBtn from "../components/TodoComp/AddBtn";
import TodoItem from "../components/TodoComp/TodoItem";
import ModeToggle from "../components/TodoComp/ModeToggle";
import { ThemeProvider } from "../components/TodoComp/ThemeProvider";

import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

// Import Sonner toast
import { Toaster, toast } from "sonner";

function TodoPage() {

  // Uses list from store
  const { list, addList, removeList, toggleDone, updateListOrder, updateText } = useTodoStore();

  // Local state for search input
  const [searchItem, setSearchItem] = useState("");
  const lastInputRef = useRef<HTMLInputElement | null>(null);

  // Focus on last input when new one is added
  useEffect(() => {
    lastInputRef.current?.focus();
  }, [list.length]);

  // DnD, drag gestures recognised
  const sensors = useSensors(useSensor(PointerSensor));

  // Debounce function
  function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  // Debounced toast only (store updates instantly)
  const debouncedToast = useRef(
    debounce(() => {
      toast.info("Task updated", { duration: 1000 });
    }, 800) // 800ms after last keystroke
  ).current;

  // Added toast
  const handleAddClick = () => {
    addList("");
    toast.success("New task added!", { duration: 1000 });
  };

  // Enter key, add new row
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: number,
    value: string
  ) => {
    if (e.key === "Enter" && value.trim()) {
      const isLast = list[list.length - 1]?.id === id;
      if (isLast) {
        addList("");
        toast.success("New task added!", { duration: 1000 });
      }
    }
  };

  // Updated toast (store updates instantly, toast debounced)
  const handleChange = (id: number, value: string) => {
    updateText(id, value); // update store instantly
    debouncedToast(); // debounce toast
  };

  // Deleted toast
  const handleDelete = (id: number) => {
    removeList(id);
    toast.error("Task deleted!", { duration: 1000 });
  };

  // Reorder Handler
  const handleDragEnd = (event: any) => {
      const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = list.findIndex((item) => item.id === active.id);
    const newIndex = list.findIndex((item) => item.id === over.id);
    const newList = arrayMove(list, oldIndex, newIndex);
    updateListOrder(newList);
  };

  // Search
  const filteredList = list.filter((item) =>
    item.text.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (

    // Theme Provider
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

        {/* Toast */}
        <Toaster richColors position="top-center" />

        <div className="fixed inset-0 flex items-center justify-center transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
          <div className="relative bg-white dark:bg-gray-800 dark:text-gray-100 rounded-xl shadow-xl max-w-[400px] h-[500px] w-full 
          overflow-auto p-6 flex flex-col transition-colors duration-300">

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Your To-do List</h2>
              <ModeToggle />
            </div>

            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              className="mb-4 p-1 text-sm border rounded-md w-full 
              focus:outline-none focus:ring-1 focus:ring-blue-300 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-300 dark:focus:ring-blue-500 transition-colors duration-300"/>

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}>

              <SortableContext
                items={filteredList.map((i) => i.id)}
                strategy={verticalListSortingStrategy}>

                <div className="flex flex-col gap-3">
                  {filteredList.map((item, idx) => (
                    <TodoItem
                      key={item.id}
                      id={item.id}
                      value={item.text}
                      done={item.done}
                      isLast={idx === filteredList.length - 1}
                      lastInputRef={lastInputRef}
                      handleChange={handleChange}
                      handleKeyDown={handleKeyDown}
                      toggleDone={toggleDone}
                      handleDelete={handleDelete}/>
                  ))}
                </div>

              </SortableContext>
            </DndContext>

            <div className="absolute bottom-6 right-6">
              <AddBtn onClick={handleAddClick} />
            </div>
          </div>
        </div>
    </ThemeProvider>
  );
}

export default TodoPage;