import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [],


    addToCart: (product) => set((state) => {

        const existingItem = state.cart.find((item) => item.product.product.id === product.product.id);
        if (existingItem) {
            return {
                cart: state.cart.map((item) =>
                    item.product.product.id === product.product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        } else {
            return {
                cart: [...state.cart, { product, quantity: 1 }],
            };
        }


        // cart: [...state.cart, { product }], // Bungkus dalam { product }
    }
    ),
    removeFromCart: (productId) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.product.product.id !== productId),
        })),

    updateAmount: (productId, newAmount) => set((state) => {
        if (newAmount <= 0) {
            return {
                cart: state.cart.filter((item) => item.product.product.id !== productId),
            };
        }

        return {
            cart: state.cart.map((item) =>
                item.product.product.id === productId
                    ? { ...item, quantity: newAmount }
                    : item
            ),
        }
    }),

    clearCart: () => set(() => {
        console.log("Cart cleared");
        return { cart: [] };
    }),
}));

export default useCartStore;