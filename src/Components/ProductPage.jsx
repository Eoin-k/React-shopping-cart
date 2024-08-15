import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../helpers/ProductAPI";
import Header from "./Header";
import Footer from "./Footer";
import SingleQuantitySelector from "./singleProductQuantitySelector";
export default function ProductPage() {
	const [product, setProduct] = useState([]);
	const [QuantityCost, setQuantityCost] = useState(product.price);
	const params = useParams();

	useEffect(() => {
		const productData = async () => {
			try {
				const productDetails = await getProducts("", "", `${params.id}`);
				setProduct(productDetails);
			} catch (err) {
				console.error(err);
			}
		};
		productData();
		setQuantityCost(product.price);
	}, []);

	function QuantityTotalCost(quant) {
		const QuantityCost = quant * product.price;
		return setQuantityCost(QuantityCost);
	}

	return (
		<>
			<Header />
			<h1></h1>
			<div className="container">
				<div className="single-product-wrapper">
					<div className="single-product-image-wrapper">
						<img src={product.image} alt="" />
					</div>
					<div className="single-product-description">
						<h3>{product.title}</h3>
						<p>{product.description}</p>
						<div className="single-product-purchase-wrapper">
							<p>${product.price} each</p>
							<p>Current Quantity Cost:${QuantityCost}</p>
							<SingleQuantitySelector
								passedFunction={QuantityTotalCost}
								product={product}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
