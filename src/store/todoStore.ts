import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

// Todo App Can have
interface Todo {
  id: number
  text: string
  done: boolean
}

// Describe what the store will contain
interface TodoState {
  list: Todo[]
  addList: (text: string) => void
  removeList: (id: number) => void
  toggleDone: (id: number) => void
}

// Persist
const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      // state: start with empty todos
      list: [],

      // add a new todo
      addList: (text) =>
        set((state) => ({
          list: [...state.list, { id: Date.now(), text, done: false }],
        })),

      // remove a todo by id
      removeList: (id) =>
        set((state) => ({
          list: state.list.filter((todo) => todo.id !== id),
        })),

      // toggle done state
      toggleDone: (id) =>
        set((state) => ({
          list: state.list.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          ),
        })),
    }),
    {
      name: "todo-storage", // unique key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useTodoStore
