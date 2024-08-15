import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../helpers/cartContext";
import { Link } from "react-router-dom";

export default function OrderDetails() {
	const { cartItems, setCartItems } = useContext(CartContext);
	const [orderItems, setOrderItems] = useState([]);
	useEffect(() => {
		setOrderItems(cartItems);
		setCartItems([]);
	}, []);
	return (
		<>
			<Header />
			<div className="checkout-container container">
				<h1>Your Order Details</h1>
				<div className="checkout-cart-container">
					<h2>
						Thank you for your order, you will find details of your order and
						delivery information below
					</h2>
					{orderItems.map((item) => (
						<div key={item} className="checkout-cart-item">
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
							</div>
						</div>
					))}
					<div className="delivery-info">
						<h3>Delivery Details:</h3>
						<p>Your order is expected to ship within 3 working days</p>
						<p>
							DISCLAIMER: I would not count on actually receiving your ordered
							items
						</p>
						<Link to={"/"}>
							<button>Back to Home</button>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
