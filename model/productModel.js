const db = require('../config/db');

// Obtener productos con búsqueda opcional
const getProducts = async (search = '') => {
    const query = search
        ? `SELECT * FROM products WHERE name LIKE ? OR id LIKE ? OR category LIKE ?  COLLATE utf8mb4_general_ci`
        : 'SELECT * FROM products';
    const values = search ? [`%${search}%`, `%${search}%`,`%${search}%`] : [];
    const [results] = await db.promise().query(query, values);
    return results;
};

const getOneProducts = async (id) => {
    const query = 'SELECT * FROM products WHERE id = ?';
    const [results] = await db.promise().query(query, [id]);
    if (results.length === 0) {
        throw new Error('Producto no encontrado!!!!');
    }
    return results[0];
};

const createProduct = async (name, price, category, stock) => {
    const query = 'INSERT INTO products (name, price, category, stock) VALUES (?, ?, ?, ?)';
    const [result] = await db.promise().query(query, [name, price, category, stock]);
    return result.insertId;
};

const updateProduct = async (id, name, price, category, stock) => {
    const query = 'UPDATE products SET name = ?, price = ?, category = ?, stock = ? WHERE id = ?';
    await db.promise().query(query, [name, price, category, stock, id]);
};

const deleteProduct = async (id) => {
    const query = 'DELETE FROM products WHERE id = ?';
    await db.promise().query(query, [id]);
};

const getCategories = async () => {
    const [rows] = await db.promise().query("SHOW COLUMNS FROM products LIKE 'category'");
    const enumValues = rows[0].Type; // El tipo de la columna category, que es un ENUM
    // Extraemos los valores del ENUM con una expresión regular
    const categories = enumValues.match(/'([^']+)'/g).map(e => e.replace(/'/g, ''));
    
    return categories;
  };

module.exports = {
    getProducts,
    getOneProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getCategories
};
