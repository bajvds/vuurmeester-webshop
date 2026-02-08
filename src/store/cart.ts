import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, getPriceAsNumber, cleanProductName } from '@/lib/woocommerce/client';
import { trackAddToCart, trackRemoveFromCart } from '@/lib/analytics';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;

  // Actions
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  // Computed
  getItemCount: () => number;
  getSubtotal: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, quantity = 1) => {
        trackAddToCart({
          id: product.id,
          name: cleanProductName(product.name),
          price: getPriceAsNumber(product.prices.price),
          quantity,
        });
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { product, quantity }],
          };
        });
      },

      removeItem: (productId) => {
        const item = get().items.find((i) => i.product.id === productId);
        if (item) {
          trackRemoveFromCart({
            id: item.product.id,
            name: cleanProductName(item.product.name),
            price: getPriceAsNumber(item.product.prices.price),
            quantity: item.quantity,
          });
        }
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => {
          // Store API returns price in cents
          const price = getPriceAsNumber(item.product.prices.price);
          return total + price * item.quantity;
        }, 0);
      },
    }),
    {
      name: 'vuurmeester-cart',
      // Only persist items, not UI state
      partialize: (state) => ({ items: state.items }),
    }
  )
);
