import { useState } from 'react'
import useTodoStore from '../store/todoStore'

function TodoPage() {
  const { list, addList } = useTodoStore()
  const [newTodo, setNewTodo] = useState("")

  // Called when a key is pressed
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTodo.trim()) {
      addList(newTodo) 
      setNewTodo("") 
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative z-20 bg-white rounded-xl shadow-xl max-w-[400px] h-[500px] w-full overflow-auto p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Your To-do List</h2>

        {/* Input */}
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type something and press Enter"
          className="text-sm text-gray-700 border-b border-gray-400 focus:outline-none focus:border-gray-400 w-full py-2 mb-4"
        />

        {/* Circles for each todo */}
        <div className="flex flex-col gap-2">
          {list.map((todo) => (
            <div
              key={todo.id}
              className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center"
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodoPage
