import { create } from "zustand";

const useFilteredCategoriesStore = create((set) => ({
    filteredCategory: "All",
    setFilteredCategory: (category) => set({ filteredCategory: category }),
}));

export default useFilteredCategoriesStore;
