import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Todo {
  id: number;
  text: string;
  done: boolean;
  tagColor?: string;
}

interface TodoState {
  list: Todo[];
  addList: (text: string) => void;
  removeList: (id: number) => void;
  toggleDone: (id: number) => void;
  updateText: (id: number, text: string) => void;
  updateTag: (id: number, color: string) => void;
  updateListOrder: (newList: Todo[]) => void;
}

const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      list: [],

      // Add
      addList: (text) =>
        set((state) => ({
          list: [
            ...state.list,
            { id: Date.now(), text, done: false, tagColor: "" },
          ],
        })),

      // Delete
      removeList: (id) =>
        set((state) => ({
          list: state.list.filter((todo) => todo.id !== id),
        })),

      // Toggle Done
      toggleDone: (id) =>
        set((state) => ({
          list: state.list.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          ),
        })),

      // Update Text
      updateText: (id, text) =>
        set((state) => ({
          list: state.list.map((todo) =>
            todo.id === id ? { ...todo, text } : todo
          ),
        })),

      // Update Tag Color
      updateTag: (id, color) =>
        set((state) => ({
          list: state.list.map((todo) =>
            todo.id === id ? { ...todo, tagColor: color } : todo
          ),
        })),

      // Reorder
      updateListOrder: (newList) => set({ list: newList }),
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTodoStore;