import React from "react";
import type { RefObject } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FiCheck } from "react-icons/fi";
import { Trash } from "lucide-react";
import { Select, SelectTrigger, SelectContent, SelectItem } from "./Select.tsx";
import useTodoStore from "../../store/todoStore"; 

interface TodoItemProps {
  id: number;
  value: string;
  done: boolean;
  isLast: boolean;
  lastInputRef: RefObject<HTMLInputElement | null>;
  handleChange: (id: number, value: string) => void;
  handleKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: number,
    value: string
  ) => void;
  toggleDone: (id: number) => void;
  handleDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  value,
  done,
  isLast,
  lastInputRef,
  handleChange,
  handleKeyDown,
  toggleDone,
  handleDelete,
}) => {
  
  // Sortable
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // Get item + updater from store
  const { list, updateTag } = useTodoStore();
  const item = list.find((i) => i.id === id);

  return (
    <div ref={setNodeRef} style={style} className="flex items-center gap-3">

      {/* Drag handle */}
      <div
        {...listeners}
        {...attributes}
        className="cursor-grab flex flex-col justify-center mr-2 p-1"
        title="Drag to reorder">

        <div className="w-5 h-0.25 bg-gray-400 mb-1 rounded-sm"></div>
        <div className="w-5 h-0.25 bg-gray-400 mb-1 rounded-sm"></div>
        <div className="w-5 h-0.25 bg-gray-400 mb-1 rounded-sm"></div>
      </div>

      {/* Done circle */}
      <div
        onClick={() => toggleDone(id)}
        className={`w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer transition-colors shrink-0 ${
          done ? "bg-blue-500 border-blue-500" : "bg-transparent"
        }`}>

        <FiCheck
          className={`text-white transition-transform duration-300 ease-out ${
            done ? "scale-90 opacity-100" : "scale-0 opacity-0"
          }`}/>
      </div>

      {/* Text Input */}
      <input
        ref={isLast ? lastInputRef : null}
        type="text"
        value={value}
        onChange={(e) => handleChange(id, e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, id, value)}
        placeholder="Type a task..."
        className={`text-sm border-b border-gray-300 focus:outline-none flex-1 py-1 ${
          done ? "line-through text-gray-400" : "text-gray-500"
        }`}/>

      {/* Tag */}
      <Select
        value={item?.tagColor || ""}
        onValueChange={(color) => updateTag(id, color)}>

        <SelectTrigger className="w-6 h-6 p-0">
          <div
            className="w-4 h-4 rounded-sm"
            style={{
              backgroundColor: item?.tagColor || "transparent",
              border: "1px solid #ccc",
            }}/>
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="red">
            <div className="w-4 h-4 bg-red-500 rounded-sm" />
          </SelectItem>
          <SelectItem value="green">
            <div className="w-4 h-4 bg-green-500 rounded-sm" />
          </SelectItem>
          <SelectItem value="blue">
            <div className="w-4 h-4 bg-blue-500 rounded-sm" />
          </SelectItem>
        </SelectContent>
      </Select>

      {/* Delete Button */}
      <div
        onClick={() => handleDelete(id)}
        className="text-sm px-3 py-1 rounded-3xl flex items-center justify-center border border-gray-300 flex-shrink-0 cursor-pointer hover:bg-gray-100 transition">
        <Trash className="w-4 h-4 text-red-400" />
      </div>
    </div>
  );
};

export default TodoItem;
