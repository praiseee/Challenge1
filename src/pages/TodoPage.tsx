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

  const { list, addList, removeList, toggleDone, updateListOrder, updateText } = useTodoStore(); // List from store
  const [searchItem, setSearchItem] = useState(""); // Search State
  const [filterColor, setFilterColor] = useState<string | null>(null); // Filter state
  const lastInputRef = useRef<HTMLInputElement | null>(null); // FOcus on last input

  useEffect(() => {
    lastInputRef.current?.focus();
  }, [list.length]);

  //DnD drga gesture
  const sensors = useSensors(useSensor(PointerSensor));

  // Debounced toast
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
    }, 800)
  ).current;

  // Added toast
  const handleAddClick = () => {
    addList("");
    toast.success("New task added!", { duration: 1000 });
  };

  // Enter lkey add new row
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, id: number, value: string) => {
    if (e.key === "Enter" && value.trim()) {
      const isLast = list[list.length - 1]?.id === id;
      if (isLast) addList("");
    }
  };

  // Updated toast (store updates instantly, toast debounced)
  const handleChange = (id: number, value: string) => {
    updateText(id, value);
    debouncedToast();
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

  // Filtered list by search + tag color
  const filteredList = list.filter(
    (item) =>
      item.text.toLowerCase().includes(searchItem.toLowerCase()) &&
      (!filterColor || item.tagColor === filterColor)
  );

  // Color filter + clear button component
  const ColorFilter = () => (
    <div className="flex gap-2 mb-4 items-center">
      {["red", "green", "blue"].map((color) => (
        <button
          key={color}
          onClick={() => setFilterColor(filterColor === color ? null : color)}
          className={`w-4 h-4 rounded-sm border ${filterColor === color ? "border-black" : "border-gray-300"}`}
          style={{ backgroundColor: color }}
          title={`Filter by ${color}`}/>
      ))}

      {/* Clear button */}
      <button
        onClick={() => setFilterColor(null)}
        className="ml-2 px-2 py-0.5 text-xs rounded border border-gray-300 dark:border-gray-600 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        title="Clear filter">

        Clear Filter
      </button>
    </div>
  );

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Toaster richColors position="top-center" />

      <div className="fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="relative bg-white dark:bg-gray-800 dark:text-gray-100 rounded-xl shadow-xl max-w-[400px] h-[500px] w-full overflow-auto p-6 flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Your To-do List</h2>
            <ModeToggle />
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="mb-2 p-1 text-sm border rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-300 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-300 dark:focus:ring-blue-500 transition-colors duration-300"/>

          {/* Color Filter Component */}
          <ColorFilter />

          {/* Drag-and-drop context */}
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={filteredList.map((i) => i.id)} strategy={verticalListSortingStrategy}>
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
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>

          {/* Add button */}
          <div className="absolute bottom-6 right-6">
            <AddBtn onClick={handleAddClick} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default TodoPage;