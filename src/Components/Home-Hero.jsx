import { Link } from "react-router-dom";

export default function HomeHero() {
	return (
		<>
			<section className="hero-section">
				<div className="container">
					<div className="hero-inner-wrapper">
						<div className="hero-content">
							<h1>Welcome To My Shop</h1>
							<p>Have a browse around and pick out anything that you like</p>
							<Link to={"/shop"}>
								<button className="btn-primary">Go to Shop</button>
							</Link>
						</div>
						<div className="hero-media-wrapper">
							<img
								className="hero-image"
								src="..//src/assets/storePhoto.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
