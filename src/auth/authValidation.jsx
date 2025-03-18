import { create } from "zustand";

const useAuthValidation = create((set) => ({
    isLogin: false,
    setIsLogin: () => set({isLogin: true}),
    reset: () => set({ isLogin: false }),
}));

export default useAuthValidation;