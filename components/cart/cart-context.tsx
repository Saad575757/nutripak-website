"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { SEED_CART } from "@/lib/site";

export interface CartItem {
  key: string;
  name: string;
  variant: string;
  price: number;
  image: string;
  alt: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (key: string) => void;
  increment: (key: string) => void;
  decrement: (key: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "nutripak.cart.v1";

function toItems(
  seeds: typeof SEED_CART
): CartItem[] {
  return seeds.map((seed) => ({
    key: seed.key,
    name: seed.name,
    variant: seed.variant,
    price: seed.price,
    image: seed.image,
    alt: seed.alt,
    quantity: 1,
  }));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => toItems(SEED_CART));
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Guards the storage read against re-running. StrictMode double-invokes
   * effects in dev, and without this the second pass would read back the seed
   * cart that the persist effect had already written, discarding the real one.
   */
  const hydrated = useRef(false);

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // An emptied cart is stored as [], so only fall back to the seed when
      // nothing has been saved yet.
      if (raw !== null) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) {
          // The server renders the seed cart; applying stored state here avoids
          // SSR hydration mismatches on first paint.
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setItems(parsed);
        }
      }
    } catch {
      // ignore malformed storage
    }
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable (e.g. private mode)
    }
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.key === item.key);
      if (existing) {
        return prev.map((p) =>
          p.key === item.key ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((key: string) => {
    setItems((prev) => prev.filter((p) => p.key !== key));
  }, []);

  const increment = useCallback((key: string) => {
    setItems((prev) =>
      prev.map((p) =>
        p.key === key ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  }, []);

  const decrement = useCallback((key: string) => {
    setItems((prev) =>
      prev
        .map((p) =>
          p.key === key ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        subtotal,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        increment,
        decrement,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}