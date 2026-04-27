import { create } from 'zustand';

type CartStore = {
  count: number;
  setCount: (num: number) => void;
};

export const useCartStore = create<CartStore>((set) => (
  
  {
  count: 0,
  setCount: (num) => set({ count: num }),
}


)

);
export const useWishlistStore = create<CartStore>((set) => (
  
  {
  count: 0,
  setCount: (num) => set({ count: num }),
}


)

);