import { useState, useEffect, useRef } from "react";
import useTodoStore from "../store/todoStore";
import AddBtn from "../components/TodoComp/AddBtn.tsx";
import TodoItem from "../components/TodoComp/TodoItem.tsx";

interface TodoInput {
  id: number;
  value: string;
  done: boolean;
}

function TodoPage() {
  const { list, addList, removeList, toggleDone: toggleDoneStore } = useTodoStore();

  // Local state for UI rows, initialized from store
  const [inputs, setInputs] = useState<TodoInput[]>(() =>
    list.length > 0
      ? list.map((todo) => ({ id: todo.id, value: todo.text, done: todo.done }))
      : [{ id: Date.now(), value: "", done: false }]
  );

  // Last input, when a new row is added
  const lastInputRef = useRef<HTMLInputElement | null>(null);

  // Focus on last input whenever it changes
  useEffect(() => {
    lastInputRef.current?.focus();
  }, [inputs.length]);

  // Input field
  const handleChange = (id: number, value: string) => {
    setInputs((prev) => prev.map((input) => (input.id === id ? { ...input, value } : input)));
  };

  // Handle Enter key to add a new todo
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, id: number, value: string) => {
    if (e.key === "Enter") {
      const trimmed = value.trim();
      if (!trimmed) return;

      // Add to store
      addList(trimmed);

      // Only add a new row if this is the last row
      setInputs((prev) => {
        const isLast = prev[prev.length - 1].id === id;
        if (isLast) {
          return [...prev, { id: Date.now(), value: "", done: false }];
        }
        return prev;
      });
    }
  };

  // Done state for a todo item
  const toggleDone = (id: number) => {
    setInputs((prev) =>
      prev.map((input) => (input.id === id ? { ...input, done: !input.done } : input))
    );
    toggleDoneStore(id); // update store
  };

  // Delete task
  const handleDelete = (id: number) => {
    removeList(id);
    setInputs((prev) => prev.filter((input) => input.id !== id));
  };

  // Add a new empty todo row
  const handleAddClick = () => {
    setInputs((prev) => [...prev, { id: Date.now(), value: "", done: false }]);
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Todo container */}
      <div className="relative bg-white rounded-xl shadow-xl max-w-[400px] h-[500px] w-full overflow-auto p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Your To-do List</h2>

        {/* Todo items list */}
        <div className="flex flex-col gap-3">
          {inputs.map((input, idx) => (
            <TodoItem
              key={input.id}
              id={input.id}
              value={input.value}
              done={input.done}
              isLast={idx === inputs.length - 1}
              lastInputRef={lastInputRef}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown}
              toggleDone={toggleDone}
              handleDelete={handleDelete}
            />
          ))}
        </div>

        {/* Add Button */}
        <div className="absolute bottom-6 right-6">
          <AddBtn onClick={handleAddClick} />
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
