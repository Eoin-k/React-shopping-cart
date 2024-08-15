import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
	return (
		<>
			<div className="container">
				<div className="cards-wrapper-inner">
					{products.map((product) => (
						<ProductCard
							product={product}
							key={product.id}
							id={product.id}
							title={product.title}
							image={product.image}
							description={product.description}
						/>
					))}
				</div>
			</div>
		</>
	);
}
