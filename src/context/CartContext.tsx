import { createContext, useContext, useEffect, useState } from 'react';
import type { CartItem } from '../interfaces/ShoppingCart';
import { shoppingCarts } from '../Data/data';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = sessionStorage.getItem('cart');

    if (savedCart) {
        return JSON.parse(savedCart);
    }

    return shoppingCarts[0]?.items ?? [];
    });

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);
    
  const addToCart = (productId: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.productId === productId
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevItems,
        {
          productId,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (productId: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.productId !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used inside CartProvider');
  }

  return context;
}