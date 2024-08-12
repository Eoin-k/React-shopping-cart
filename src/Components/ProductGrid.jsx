import { Link } from "react-router-dom";

export default function ProductGrid({products}) {
    return(
        <>
        <div className="container">
            <div className="cards-wrapper-inner">
                {products.map(product => (
                    <div key={product.id}>
                        <div className="product-image-wrapper">
                            <img className="product-image" src={product.image} alt="" />
                        </div>
                       <Link to={`product/${product.id}`}><h4>{product.title}</h4></Link>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}