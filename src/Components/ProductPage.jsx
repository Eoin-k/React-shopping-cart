import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../helpers/ProductAPI";
export default function ProductPage() {
	const [product, setProduct] = useState([]);
	const params = useParams();
	console.log(params.id);
	useEffect(() => {
		const productData = async () => {
			try {
				const productDetails = await getProducts("", `${params.id}`);
				setProduct(productDetails);
			} catch (err) {
				console.error(err);
			}
		};
		productData();
		console.log(product);
	}, []);

	return (
		<>
			<h1>{product[0].title}</h1>
			<div className="container">
				<div className="single-product-wrapper">
					<div className="single-product-description">{product[0].description}</div>
					<div className="single-product-image-wrapper">
						<img src={product[0].image} alt="" />
					</div>
				</div>
			</div>
		</>
	);
}
