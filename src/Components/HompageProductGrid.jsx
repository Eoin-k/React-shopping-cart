export default function HomeProductGrid({products}) {
    return(
        <>
        <div className="container">
            <div className="hero-cards-wrapper-inner">
                {products.map(product => (
                    <div key={product.id}>
                        <div className="product-image-wrapper">
                            <img src={product.image} alt="" />
                        </div>
                        <h4>{product.title}</h4>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}