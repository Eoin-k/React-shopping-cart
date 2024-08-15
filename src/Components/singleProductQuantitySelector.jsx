import { useContext, useState } from "react";
import { CartContext } from "../helpers/cartContext";
export default function SingleQuantitySelector({ passedFunction, product }) {
	const [value, setValue] = useState(1);
	const { addToCart } = useContext(CartContext);
	if (passedFunction === undefined) {
		passedFunction = console.log("hi");
	}

	function decrementInput() {
		if (value === 1) {
			return;
		} else {
			let newVal = Number(value) - 1;
			setValue(newVal);
			passedFunction(newVal);
			console.log(value, "dec");
		}
	}
	function IncrementInput() {
		let newVal = Number(value) + 1;
		setValue(newVal);
		passedFunction(newVal);
		console.log(value, "inc");
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
			<button onClick={() => addToCart(product)}>Add to cart</button>
		</div>
	);
}
