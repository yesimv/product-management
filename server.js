const express = require('express');
const path = require('path');
const cors = require('cors');
const productRoutes = require('./routes/products');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
