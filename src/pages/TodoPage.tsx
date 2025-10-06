import { useState, useEffect, useRef } from "react"
import useTodoStore from "../store/todoStore"

interface TodoInput {
  id: number
  value: string
  done: boolean
}

function TodoPage() {
  const { list, addList, removeList, toggleDone: toggleDoneStore } = useTodoStore()

  // Local state for UI rows, initialized from store
  const [inputs, setInputs] = useState<TodoInput[]>(() =>
    list.length > 0
      ? list.map((todo) => ({ id: todo.id, value: todo.text, done: todo.done }))
      : [{ id: Date.now(), value: "", done: false }]
  )

  const lastInputRef = useRef<HTMLInputElement | null>(null)

  // Focus on the last input whenever it changes
  useEffect(() => {
    lastInputRef.current?.focus()
  }, [inputs.length])

  // Handle typing
  const handleChange = (id: number, value: string) => {
    setInputs((prev) =>
      prev.map((input) => (input.id === id ? { ...input, value } : input))
    )
  }
  
  // Handle Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, id: number, value: string) => {
    if (e.key === "Enter") {
      const trimmed = value.trim()
      if (!trimmed) return
  
      // Add to store
      addList(trimmed)
  
      // Only add a new row if this is the last row
      setInputs((prev) => {
        const isLast = prev[prev.length - 1].id === id
        if (isLast) {
          return [...prev, { id: Date.now(), value: "", done: false }]
        }
        return prev
      })
    }
  }
  
  // Toggle done state
  const toggleDone = (id: number) => {
    setInputs((prev) =>
      prev.map((input) =>
        input.id === id ? { ...input, done: !input.done } : input
      )
    )
    toggleDoneStore(id) // update store
  }

  // Delete a task
  const handleDelete = (id: number) => {
    removeList(id)
    setInputs((prev) => prev.filter((input) => input.id !== id))
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative bg-white rounded-xl shadow-xl max-w-[400px] h-[500px] w-full overflow-auto p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Your To-do List</h2>

        <div className="flex flex-col gap-3">
          {inputs.map((input, idx) => (
            <div key={input.id} className="flex items-center gap-3">
              {/* Done Circle */}
              <div
                onClick={() => toggleDone(input.id)}
                className={`w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer transition-colors shrink-0 ${
                  input.done ? "bg-blue-500 border-blue-500" : "bg-transparent"}`}>
              </div>

              {/* Text Input */}
              <input
                ref={idx === inputs.length - 1 ? lastInputRef : null} // focus on last input
                type="text"
                value={input.value}
                onChange={(e) => handleChange(input.id, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, input.id, input.value)}
                placeholder="Type a task..."
                className={`text-sm text-gray-500 border-b border-gray-300 focus:outline-none flex-1 py-1`}
              />

              {/* Delete Button */}
              <div
                onClick={() => handleDelete(input.id)}
                className="text-sm px-3 py-1 rounded-3xl flex items-center justify-center border border-gray-300 flex-shrink-0 cursor-pointer hover:bg-gray-100 transition">
                Delete
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodoPage
