import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthValidation = create(persist(
    (set) => ({
        isLogin: false,
        setIsLogin: () => set({ isLogin: true }),
        reset: () => set({ isLogin: false }),
    }),
    {
        name: "auth-storage",
        getStorage: () => localStorage,
    }
));

export default useAuthValidation;