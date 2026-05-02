import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types/api';

interface CartItem {
  id: string;
  product: {
    title: string;
    price: number;
    image?: string;
  };
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Omit<Product, 'promotion'>) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Omit<Product, 'promotion'>) => {
    const existingItem = cartItems.find(item => item.id === product.articleNumber);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.articleNumber
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, {
        id: product.articleNumber,
        product: {
          title: product.title,
          price: product.price,
          image: product.image.link,
        },
        quantity: 1,
      }]);
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
