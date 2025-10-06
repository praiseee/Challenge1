import React from "react";
import type { RefObject } from "react";

interface TodoItemProps {
  id: number;
  value: string;
  done: boolean;
  isLast: boolean;
  lastInputRef: RefObject<HTMLInputElement | null>;
  handleChange: (id: number, value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, id: number, value: string) => void;
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
  return (
    <div className="flex items-center gap-3">
      {/* Done Circle */}
      <div
        onClick={() => toggleDone(id)}
        className={`w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer transition-colors shrink-0 ${
          done ? "bg-blue-500 border-blue-500" : "bg-transparent"
        }`}
      ></div>

      {/* Text Input */}
      <input
        ref={isLast ? lastInputRef : null} // focus on last input
        type="text"
        value={value}
        onChange={(e) => handleChange(id, e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, id, value)}
        placeholder="Type a task..."
        className="text-sm text-gray-500 border-b border-gray-300 focus:outline-none flex-1 py-1"
      />

      {/* Delete Button */}
      <div
        onClick={() => handleDelete(id)}
        className="text-sm px-3 py-1 rounded-3xl flex items-center justify-center border border-gray-300 flex-shrink-0 cursor-pointer hover:bg-gray-100 transition"
      >
        Delete
      </div>
    </div>
  );
};

export default TodoItem;
