import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../helpers/cartContext";

export default function Header() {
	const [showcart, setCartDisplay] = useState(false);
	const { cartItems, removeFromCart } = useContext(CartContext);
	return (
		<>
			<header>
				<div className="header-wrapper container">
					<div className="logo-wrapper">
						<Link to={"/"}>
							<img src="https://img.logoipsum.com/260.svg" alt="" />
						</Link>
					</div>
					<div className="nav-wrapper">
						<nav className="nav">
							<ul>
								<li className="nav-item">
									<Link to="/shop">Shop</Link>
								</li>
								<i onClick={() => setCartDisplay(!showcart)}>
									<img
										className="cart-icon"
										src="src/assets/shopping-cart-outline-svgrepo-com.svg"
										alt=""
									/>
									{cartItems.length !== 0 ? (
										<p className="cart-count">{cartItems.length}</p>
									) : null}
								</i>
							</ul>

							{showcart ? (
								<div className="cart-wrapper">
									<h3 className="cart-header">Cart</h3>
									{cartItems.length !== 0 ? (
										<div className="cart-inner">
											{cartItems.map((item) => (
												<div key={item.id} className="cart-item">
													<img className="cart-image" src={item.image} alt="" />
													<h4>{item.title}</h4>
													<p>${item.price}</p>
													<div className="quantity-total-wrapper">
														<p>Quantity: {item.quantity}</p>
														<p>Item Total: ${item.quantity * item.price}</p>
													</div>
													<button
														onClick={removeFromCart}
														className="remove-item"
													>
														Remove
													</button>
												</div>
											))}
										</div>
									) : (
										<p>Oops Looks like your cart is empty</p>
									)}
									<div>
										<p className="cart-total">
											Cart Total: $
											{cartItems
												.reduce(
													(acc, currVal) =>
														acc + currVal.quantity * currVal.price,
													0,
												)
												.toFixed(2)}
										</p>
										{cartItems.length !== 0 ? (
											<Link to="/checkout">
												<button className="checkout-btn">Go To Checkout</button>
											</Link>
										) : null}
									</div>
								</div>
							) : null}
						</nav>
					</div>
				</div>
			</header>
		</>
	);
}
