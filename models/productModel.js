const res = require('express/lib/response');
const db = require('../config/db'); 

// Post producto
const createProduct = async (name, category, stock, price) => {
  
    const query = 'INSERT INTO products (name, category, stock, price) VALUES (?, ?, ?, ?)';
    const [result] = await db.promise().query(query, [name, category, stock, price]);
    return result.insertId; // Devolver el ID del producto recién creado
  
};

// GetAll products
const getProducts = async () => {
  
    const query = 'SELECT * FROM products';
    const [results] = await db.promise().query(query);
    return results;
  
  
};
//GetOne PRoduct
const getOneProducts = async (id) => {
    
    const query = 'SELECT name, category, stock, price FROM products WHERE id = ?';
    const [results] = await db.promise().query(query, [id]);

    if (results.length === 0) {
        throw new Error('Producto no encontrado');
      }

    return results[0];
}

// Update product
const updateProduct = async (id, name, category, stock, price) => {
  
    const query = 'UPDATE products SET name = ?, category = ?, stock = ?, price = ? WHERE id = ?';
    await db.promise().query(query, [name, category, stock, price, id]);
  
};

// DEelete product
const deleteProduct = async (id) => {
  
    const query = 'DELETE FROM products WHERE id = ?';
    await db.promise().query(query, [id]);
  
};

module.exports = {
  createProduct,
  getProducts,
  getOneProducts,
  updateProduct,
  deleteProduct
};
