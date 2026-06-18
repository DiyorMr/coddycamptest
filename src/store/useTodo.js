import { create } from "zustand";

export const useTodo = create((set) => ({
  tasks: [],

  addTask: (text) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text, complated: false }],
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    })),

  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, complated: !t.complated } : t,
      ),
    })),
}));
