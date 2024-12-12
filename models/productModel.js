const res = require('express/lib/response');
const db = require('../config/db'); 

// Post producto
const createProduct = async (name, price, category, stock) => {
  
    const query = 'INSERT INTO products (name, price, category, stock) VALUES (?, ?, ?, ?)';
    const [result] = await db.promise().query(query, [name, price, category, stock]);
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
    
    const query = 'SELECT name, price, category, stock FROM products WHERE id = ?';
    const [results] = await db.promise().query(query, [id]);

    if (results.length === 0) {
        throw new Error('Producto no encontrado');
      }

    return results[0];
}

// Update product
const updateProduct = async (id, name, price, category, stock) => {
  
    const query = 'UPDATE products SET name = ?, price = ?, category = ?, stock = ? WHERE id = ?';
    await db.promise().query(query, [name, price, category, stock, id]);
  
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
