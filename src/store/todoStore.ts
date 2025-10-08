import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoState {
  list: Todo[];
  addList: (text: string) => void;
  removeList: (id: number) => void;
  toggleDone: (id: number) => void;
  updateText: (id: number, text: string) => void;
  updateListOrder: (newList: Todo[]) => void;
}

const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      list: [],

      // Add
      addList: (text) =>
        set((state) => ({
          list: [...state.list, { id: Date.now(), text, done: false }],
        })),

      // Delete
      removeList: (id) =>
        set((state) => ({
          list: state.list.filter((todo) => todo.id !== id),
        })),

      // Circle
      toggleDone: (id) =>
        set((state) => ({
          list: state.list.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          ),
        })),

      // Update
      updateText: (id, text) =>
        set((state) => ({
          list: state.list.map((todo) =>
            todo.id === id ? { ...todo, text } : todo
          ),
        })),

      updateListOrder: (newList) => set({ list: newList }),
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTodoStore;
