import { CartStoreActionsType, CartStoreStateType } from "@/type";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrate: false,
      addToCart: (product) =>
        set((state) => {
          const existingindex = state.cart.findIndex(p => 
            p.id === product.id &&
            p.selectedSize === product.selectedSize &&
            p.selectedColor === product.selectedColor 
          )

          if (existingindex !== -1) {
            const updateCart = [...state.cart]
            updateCart[existingindex].quantity += product.quantity || 1
            return {cart: updateCart}
          }

          return {
            cart: [
              ...state.cart,
              {
                ...product
              }
            ]
          }
        }),
      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter((p) => !(
            p.id === product.id &&
            p.selectedColor === product.selectedColor &&
            p.selectedSize === product.selectedSize
          )),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrate = true
        }
      },
    }
  )
);

export default useCartStore;
