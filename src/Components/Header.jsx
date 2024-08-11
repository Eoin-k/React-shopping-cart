import { useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {
    const [showcart, setCartDisplay] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
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
                   {showcart ? <div className="cart-wrapper">
                        <h3>Cart</h3>
                        <div className="cart-item">
                            <img src="" alt="" />
                            <h4>Item name</h4>
                            <p>$20</p>
                            <p>Quantity: 1</p>
                            <Link to="/checkout">Checkout</Link>
                        </div>
                    </div> : null
}   
                </nav>
            </div>
        </div>
        </header>
        </>
    )
}