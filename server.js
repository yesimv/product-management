const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/products');
const path = require('path');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/products', productRoutes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en
        http://localhost:${PORT}`);
        });
