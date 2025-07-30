import { toast } from "react-toastify";
import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      if (existing) {
        toast.error("Product already in the cart");
        return {
          cart: state.cart.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }
      return { cart: [...state.cart, item] };
    }),
  //   edititem: (item) =>
  //     set((state) => {
  //       const editedItem = state.cart.find((i) => i.id === item);
  //     }),
  deleteItem: (id) =>
    set((state) => ({
      cart: state.cart.filter((i) => i.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));
