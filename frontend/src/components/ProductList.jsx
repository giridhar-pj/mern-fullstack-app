import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function ProductList({ token }) {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const fetchProducts = () => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, price: Number(price) })
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || 'Failed to add product');
        return;
      }
      setName('');
      setPrice('');
      fetchProducts();
    } catch (err) {
      setError('Could not connect to server');
    }
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    fetchProducts();
  };

  return (
    <div className="product-section">
      <form onSubmit={handleAddProduct} className="add-product-form">
        <h3>Add a Product</h3>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      <h1>Our Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            onDelete={() => handleDelete(product._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
