import { Link } from "react-router-dom";
import { useContext } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { CartContext } from "../helpers/cartContext";

export default function Checkout() {
	const { cartItems, removeFromCart } = useContext(CartContext);
	return (
		<>
			<Header />
			<div className="checkout-container container">
				<h1>Checkout</h1>
				{cartItems.length === 0 ? (
					<div className=" checkout-message container">
						<h2>Oops, Looks like your cart is empty</h2>
						<p>use the button below to head back to the shop page</p>
						<Link to={"/shop"}>
							<button>Back to shop</button>
						</Link>
					</div>
				) : (
					<div className="checkout-cart-container">
						<h2>Cart items</h2>
						{cartItems.map((item) => (
							<div key={item.id} className="checkout-cart-item">
								<img className="checkout-cart-image" src={item.image} alt="" />
								<div className="item-info">
									<div className="name-description-wrapper">
										<h4>{item.title}</h4>
										<p className="item-description">{item.description}</p>
									</div>
									<p>Unit Price: ${item.price}</p>
									<div className="checkout-quantity-total-wrapper">
										<p>Quantity: {item.quantity}</p>
										<p>Item Total: ${item.quantity * item.price}</p>
									</div>
									<div className="button-wrapper">
										<button onClick={removeFromCart} className="remove-item">
											Remove
										</button>
									</div>
								</div>
							</div>
						))}
						<Link to={"/order-details"}>
							<button className="purchase-btn">Purchase Items</button>
						</Link>
					</div>
				)}
			</div>

			<Footer />
		</>
	);
}
