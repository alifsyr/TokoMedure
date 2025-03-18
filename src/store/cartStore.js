import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => set((state) => {
        const updatedCart = [...state.cart, product];
        console.log("Product added to cart:", product);
        console.log("Updated cart:", updatedCart);
        return { cart: updatedCart };
    }),
    removeFromCart: (productId) => set((state) => {
        const updatedCart = state.cart.filter((product) => product.id !== productId);
        console.log("Product removed from cart:", productId);
        console.log("Updated cart:", updatedCart);
        return { cart: updatedCart };
    }),
    clearCart: () => set(() => {
        console.log("Cart cleared");
        return { cart: [] };
    }),
}));

export default useCartStore;