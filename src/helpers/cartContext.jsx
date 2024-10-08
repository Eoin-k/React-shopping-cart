"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	cartItems.current = cartItems;

	const addToCart = (product) => {
		const productPosition = cartItems.find(
			(cartProduct) => product.id === cartProduct.id,
		);

		if (productPosition !== undefined) {
			const arrayPosition = cartItems.indexOf(productPosition);
			cartItems[arrayPosition].quantity += product.quantity;
			cartItems.current = cartItems;
		} else {
			setCartItems([...cartItems, product]);
			cartItems.current = cartItems;
		}
	};

	const removeFromCart = (product) => {
		const productPosition = cartItems.find(
			(cartProduct) => product.id === cartProduct.id,
		);
		const arrayPosition = cartItems.indexOf(productPosition);
		cartItems.splice(arrayPosition, 1);
		setCartItems([...cartItems]);
		cartItems.current = cartItems;
	};

	return (
		<CartContext.Provider
			value={{ cartItems, setCartItems, addToCart, removeFromCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
