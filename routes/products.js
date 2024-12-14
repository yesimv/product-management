const express = require('express');
const router = express.Router();
const { getProducts, createProduct, getOneProducts, updateProduct, deleteProduct } = require('../controllers/productController');

// Obtener todos los productos o filtrar por búsqueda
router.get('/', async (req, res) => {
  try {
    const { search } = req.query;

    if (search) {
        // Si hay un término de búsqueda, realiza la consulta
        const products = await getProducts(search);
        res.json(products);
    } else {
        // Si no hay búsqueda, devuelve todos los productos
        const products = await getProducts();
        res.json(products);
    }} catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener un producto por ID
router.get('/:id', async (req, res) => {
    try {
        const product = await getOneProducts(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// Crear un nuevo producto
router.post('/', async (req, res) => {
    try {
        const { name, price, category, stock } = req.body;
        const id = await createProduct(name, price, category, stock);
        res.status(201).json({ id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar un producto
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, category, stock } = req.body;
        await updateProduct(id, name, price, category, stock);
        res.status(200).json({ message: 'Producto actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar un producto
router.delete('/:id', async (req, res) => {
    try {
        await deleteProduct(req.params.id);
        res.status(200).json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
