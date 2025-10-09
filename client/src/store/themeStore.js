import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "theme-storage", // key in storage
      getStorage: () => sessionStorage, // can also be localStorage 
    }
  )
);

export default useThemeStore;
