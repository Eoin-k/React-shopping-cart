import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../helpers/ProductAPI";
import Header from "./Header";
import Footer from "./Footer";
export default function ProductPage() {
	const [product, setProduct] = useState([]);
	const params = useParams();
	console.log(params.id);
	useEffect(() => {
		const productData = async () => {
			try {
				const productDetails = await getProducts("","", `${params.id}`);
				setProduct(productDetails);
			} catch (err) {
				console.error(err);
			}
		};
		productData();
			
	}, []);
	
	return (
		<>
		<Header />
			<h1></h1>
			<div className="container">
				<div className="single-product-wrapper">
					<div className="single-product-description">{product.description}</div>
					<div className="single-product-image-wrapper">
						<img src= ""alt="" />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
