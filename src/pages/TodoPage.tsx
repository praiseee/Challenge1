import { useState } from "react"
import useTodoStore from "../store/todoStore"

function TodoPage() {
  const { addList } = useTodoStore() //Add list function for zustand store
  const [inputs, setInputs] = useState([{ id: Date.now(), value: "" }]) //Holding an array of input objects. When the page loads, you see one blank input line.

  // Runs whenever the user types in any input box.
  const handleChange = (id: number, value: string) => {
    setInputs((prev) => {
      const updated = prev.map((input) =>
        input.id === id ? { ...input, value } : input
      )

      // Check if the user is typing in the last input
      const isLast = prev[prev.length - 1].id === id
      if (isLast && value.trim() !== "") {
        updated.push({ id: Date.now(), value: "" })
      }

      return updated
    })
  }

  //Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, id: number, value: string) => {
    if (e.key === "Enter" && value.trim()) {
      addList(value) //Calls your Zustand store’s addList() function
      setInputs((prev) =>
        prev.map((input) => (input.id === id ? { ...input, value: "" } : input))
      )
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative z-20 bg-white rounded-xl shadow-xl max-w-[400px] h-[500px] w-full overflow-auto p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Your To-do List</h2>

        {/* Inpout Rows */}
        <div className="flex flex-col gap-3">
          {inputs.map((input) => (
            <div key={input.id} className="flex items-center gap-3">
              
              {/* Circle */}
              <div className="w-5 h-5 rounded-full border border-gray-500 flex-shrink-0"></div>

              {/* Text Input */}
              <input
                type="text"
                value={input.value}
                onChange={(e) => handleChange(input.id, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, input.id, input.value)}
                placeholder="Type a task..."
                className="text-sm text-gray-700 border-b border-gray-300 focus:outline-none w-full py-1"
              />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default TodoPage
