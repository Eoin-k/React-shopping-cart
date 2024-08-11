import { useState } from "react";

export default function Header() {
    const [showcart, setCartDisplay] = useState(false)
    return (
        <>
        <div className="header-wrapper container">
            <div className="logo-wrapper"></div>
            <div className="nav-wrapper">
                <nav>
                    <ul>
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Store</li>
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
                        </div>
                    </div> : ""
}   
                </nav>
            </div>
        </div>
        </>
    )
}