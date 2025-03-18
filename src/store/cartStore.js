import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({
        cart: [...state.cart, { product }], // Bungkus dalam { product }
    })),
    removeFromCart: (productId) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.product.product.id !== productId),
        })),

    clearCart: () => set(() => {
        console.log("Cart cleared");
        return { cart: [] };
    }),
}));

export default useCartStore;