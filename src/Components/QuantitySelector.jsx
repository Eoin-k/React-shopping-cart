import { useContext, useState } from "react";
import { CartContext } from "../helpers/cartContext";
export default function QuantitySelector({ product }) {
	const [value, setValue] = useState(1);
	const { addToCart, removeFromCart } = useContext(CartContext);

	function decrementInput() {
		if (value === 1) {
			return;
		} else {
			let newVal = Number(value) - 1;
			setValue(newVal);
			console.log(value, "dec");
		}
	}
	function IncrementInput() {
		let newVal = Number(value) + 1;
		setValue(newVal);
		console.log(value, "inc");
	}
	product = { ...product, quantity: value };

	return (
		<div className="product-card-footer">
			<div className="input-wrapper">
				<button onClick={decrementInput} className="input-button">
					-
				</button>
				<input value={value} id={`NumberVal${product.id}`} readOnly />
				<button onClick={IncrementInput} className="input-button">
					+
				</button>
			</div>
			<button onClick={() => addToCart(product)}>Add to cart</button>
		</div>
	);
}
