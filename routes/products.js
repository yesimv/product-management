const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Crear producto
router.post('/', (req, res) => {
 const { name, price, category, stock } = req.body;
 const query = 'INSERT INTO products (name, price, category,stock) VALUES (?, ?, ?, ?)';
 db.query(query, [name, price, category, stock], (err, result) =>
{
    if (err) return res.status(500).send(err);
    res.status(201).send({ message: 'Producto creado',  productId: result.insertId });
 });
});

// Listar productos
router.get('/', (req, res) => {
 db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
 });
});

// Actualizar producto
router.put('/:id', (req, res) => {
 const { id } = req.params;
 const { name, price, category, stock } = req.body;
 
 const query = 'UPDATE products SET name = ?, price = ?,category = ?, stock = ? WHERE id = ?';
 db.query(query, [name, price, category, stock, id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Producto actualizado' });
 });
});
// Eliminar producto
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM products WHERE id = ?', [id], (err)  => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Producto eliminado' });
  });
});

module.exports = router;