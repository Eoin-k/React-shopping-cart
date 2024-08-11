import { Link } from "react-router-dom"
export default function Footer() {
    return(
        <>
        <footer>
        <div className="footer-outer-wrapper">
            <div className="container footer-inner-wrapper">
                <div className="logo-and-description-wrapper">
                    <div className="footer-logo-wrapper">
                    <Link to={"/"}>
                <img src="https://img.logoipsum.com/260.svg" alt="logo" />
                </Link>
                    </div>
                    <div className="description-wrapper">
                        <p>This is the description of the store and what it does adn what we sell</p>
                    </div>
                </div>
            </div>
        </div>
        </footer>
        </>
    )
}