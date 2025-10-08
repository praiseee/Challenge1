import { useState, useEffect, useRef } from "react";
import useTodoStore from "../store/todoStore";
import AddBtn from "../components/TodoComp/AddBtn";
import TodoItem from "../components/TodoComp/TodoItem";

import {DndContext,closestCenter,PointerSensor,useSensor,useSensors,} from "@dnd-kit/core";
import {arrayMove,SortableContext,verticalListSortingStrategy,} from "@dnd-kit/sortable";

function TodoPage() {

  // Uses list directly from the store
  // Persists the reordered array after drag.
  const { list, addList, removeList, toggleDone, updateListOrder, updateText } = useTodoStore();

  // Local state for the search input.
  const [searchItem, setSearchItem] = useState("");
  const lastInputRef = useRef<HTMLInputElement | null>(null);

  // Focus on last input when new one is added
  useEffect(() => {
    lastInputRef.current?.focus();
  }, [list.length]);

  // DndContext so drag gestures are recognized.
  const sensors = useSensors(useSensor(PointerSensor));

  const handleAddClick = () => {
    addList("");
  };

  // Enter key handling, add new row
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: number,
    value: string
  ) => {
    if (e.key === "Enter" && value.trim()) {
      const isLast = list[list.length - 1]?.id === id;
      if (isLast) addList("");
    }
  };

  // Typing updates the store immediately
  const handleChange = (id: number, value: string) => {
    updateText(id, value); //Updated individually
  };

  // Delete
  const handleDelete = (id: number) => {
    removeList(id);
  };

  // Reorder handler
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
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative bg-white rounded-xl shadow-xl max-w-[400px] h-[500px] w-full overflow-auto p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Your To-do List</h2>

        {/*Search*/}
        <input
          type="text"
          placeholder="Search..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="mb-4 p-1 text-sm border rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-300"/>

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
  );
}

export default TodoPage;