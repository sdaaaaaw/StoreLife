import {create} from "zustand"

const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };
export const useStoreCart =create((set)=>({
    cartItems: getCartFromLocalStorage(),
    cartItems:[],
    addtoCart:(item)=>
        set((state)=>({
            cartItems:[...state.cartItems,item],
        })),
        removeFromCart: (id) =>
            set((state) => ({
              cartItems: state.cartItems.filter((item) => item.id !== id),
            })),
          clearCart: () => set({ cartItems: [] }),
          clearCart: () =>
            set(() => {
              localStorage.removeItem("cart");
              return { cartItems: [] };
            }),
}))