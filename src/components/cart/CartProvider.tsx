'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '@/lib/types';

type CartContextType = {
	cart: CartItem[];
	addToCart: (product: Product) => void;
	removeFromCart: (productId: number) => void;
	updateQuantity: (productId: number, quantity: number) => void;
	clearCart: () => void;
	totalItems: number;
	totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [cart, setCart] = useState<CartItem[]>([]);

	useEffect(() => {
		const savedCart = localStorage.getItem('cart');
		if (savedCart) setCart(JSON.parse(savedCart));
	}, []);

	useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

	const addToCart = (product: Product) => {
		setCart((prev) =>
			prev.find(({ id }) => id === product.id)
				? prev.map((item) =>
						item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
				  )
				: [...prev, { ...product, quantity: 1 }],
		);
	};

	const removeFromCart = (productId: number) => {
		setCart((prev) => prev.filter(({ id }) => id !== productId));
	};

	const updateQuantity = (productId: number, quantity: number) => {
		if (quantity <= 0) return removeFromCart(productId);

		setCart((prev) =>
			prev.map((item) => (item.id === productId ? { ...item, quantity } : item)),
		);
	};

	const clearCart = () => setCart([]);

	const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
	const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
				totalItems,
				totalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error('useCart must be used within a CartProvider');
	return ctx;
}
