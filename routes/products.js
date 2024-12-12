const express = require('express');
const router = express.Router();
const productModel = require('../models/productModel');

// Post producto
router.post('/', async (req, res) => {
  const { name, price, category, stock } = req.body;
  try {
    const productId = await productModel.createProduct(name, price, category, stock);
    res.status(201).send({ message: 'Producto creado', productId });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all productos
router.get('/', async (req, res) => {
  try {
    const products = await productModel.getProducts();
    res.send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/:id', async (req, res) => {
   try {
      const { id } = req.params;
     const product = await productModel.getOneProducts(id);
     res.send(product);
   } catch (err) {
     res.status(500).send(err);
   }
 });

// Update producto
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, category, stock } = req.body;
  try {
    await productModel.updateProduct(id, name, price, category, stock);
    res.send({ message: 'Producto actualizado' });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete producto
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await productModel.deleteProduct(id);
    res.send({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
