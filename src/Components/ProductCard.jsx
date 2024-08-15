import { Link } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
export default function ProductCard({ product }) {
	return (
		<>
			<div className="product-card-wrapper" key={product.id}>
				<div className="product-image-wrapper">
					<img className="product-image" src={product.image} alt="" />
				</div>
				<div className="product-card-body">
					<Link to={`/product/${product.id}`}>
						<h4>{product.title}</h4>
					</Link>
					<p>{product.description}</p>
				</div>
				<QuantitySelector product={product} />
			</div>
		</>
	);
}
