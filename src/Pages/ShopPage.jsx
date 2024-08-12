import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import getProducts from "../helpers/ProductAPI";
import ProductGrid from "../Components/ProductGrid";
import { Outlet } from "react-router-dom";

export default function ShopPage() {
	const [listProducts, setProducts] = useState([]);

	useEffect(() => {
		const productData = async () => {
			try {
				// function params left blank to retreive all products
				const retreiveProducts = await getProducts("", "","");
				setProducts(retreiveProducts);
			} catch (err) {
				console.error(err);
			}
		};
		productData();
	}, []);

	return (
		<>
			<Header />
			<h1>Shop Page</h1>
			<p>Check out all our products below</p>
			<ProductGrid products={listProducts} />
			<Footer />
		</>
	);
}
