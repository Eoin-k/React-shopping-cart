"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	cartItems.current = cartItems;

	const addToCart = (product) => {
		if (cartItems.includes(product)) {
			console.log("alrady in cart");
		} else {
			setCartItems([...cartItems, product]);
			cartItems.current = cartItems;
			console.log(cartItems);
		}
	};

	const removeFromCart = (product) => {
		const amendedCart = cartItems.filter((item) => item.id !== product.id);
		setCartItems(amendedCart);
	};

	return (
		<CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};
