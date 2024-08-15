import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../helpers/cartContext";

export default function Header() {
	const [showcart, setCartDisplay] = useState(false);
	const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
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
						<nav>
							<ul>
								<li className="nav-item">
									<Link to="/shop">Shop</Link>
								</li>
								<li className="nav-item">
									<p>Cart</p>
									<i onClick={() => setCartDisplay(!showcart)}>cart icon</i>
								</li>
							</ul>
							{showcart ? (
								<div className="cart-wrapper">
									<h3>Cart</h3>
									{cartItems.map((item) => (
										<div key={item} className="cart-item">
											<img src="" alt="" />
											<h4>{item.title}</h4>
											<p>{item.price}</p>
											<p>Quantity: {item.quantity}</p>
										</div>
									))}
									<div>
										<Link to="/checkout">Checkout</Link>
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
