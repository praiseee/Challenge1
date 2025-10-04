import { create } from 'zustand'

// Todo App Can have
interface Todo {
  id: number
  text: string
}

// Describe what the store will contain
interface TodoState {
  list: Todo[]
  addList: (text: string) => void
  removeList: (id: number) => void
}

const useTodoStore = create<TodoState>((set) => ({
    // state: start with empty todos
    list: [],
  
    // add a new todo
    addList: (text) =>
      set((state) => ({
        list: [...state.list, { id: Date.now(), text }]
      })),
  
    // remove a todo by id
    removeList: (id) =>
      set((state) => ({
        list: state.list.filter((todo) => todo.id !== id) //state.list is an array of Todo objects, .filter() loops over the array
      }))
  }))  

export default useTodoStore
