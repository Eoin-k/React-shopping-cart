import { useContext, useState } from "react";
import { CartContext } from "../helpers/cartContext";
export default function SingleQuantitySelector({ passedFunction, product }) {
	const [value, setValue] = useState(1);
	const { addToCart } = useContext(CartContext);

	function decrementInput() {
		if (value === 1) {
			return;
		} else {
			let newVal = Number(value) - 1;
			setValue(newVal);
			passedFunction(newVal);
		}
	}
	function IncrementInput() {
		let newVal = Number(value) + 1;
		setValue(newVal);
		passedFunction(newVal);
	}

	passedFunction(value);

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
			<button className="add-to-cart-btn" onClick={() => addToCart(product)}>
				Add to cart
			</button>
		</div>
	);
}
