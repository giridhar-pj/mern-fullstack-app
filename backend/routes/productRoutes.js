const express = require('express');
const Product = require('../models/Product');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// GET all products - public, anyone can view
router.get('/', async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

// POST a new product - protected, must be logged in
router.post('/', authenticateToken, async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      price: req.body.price
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update a product - protected
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name, price: req.body.price },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Product not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a product - protected
router.delete('/:id', authenticateToken, async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Product not found' });
  res.json({ message: 'Product deleted' });
});

module.exports = router;
