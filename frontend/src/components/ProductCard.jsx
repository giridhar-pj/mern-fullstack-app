function ProductCard({ product, onDelete }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={onDelete} className="delete-btn">Delete</button>
    </div>
  );
}

export default ProductCard;
