import "./ProductCard.css";

function ProductCard({ product , setIsOpen  , setProduct}) {

  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button
        onClick={() => {
          setProduct(product)
          setIsOpen(true);
        }}
      >details</button>
    </div>
  );
}

export default ProductCard;
