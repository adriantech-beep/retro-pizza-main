import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-toastify";

export const useCartStore = create(
  persist(
    (set) => ({
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
      deleteItem: (id) =>
        set((state) => ({
          cart: state.cart.filter((i) => i.id !== id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // key in localStorage
    }
  )
);
