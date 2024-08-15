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
		console.log(productPosition);
		if (productPosition !== undefined) {
			const arrayPosition = cartItems.indexOf(productPosition);
			cartItems[arrayPosition].quantity += product.quantity;
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
