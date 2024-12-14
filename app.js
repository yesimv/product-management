const apiUrl = 'http://localhost:5000/api/products';

// Listar productos
async function listProducts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Error al obtener productos');
        const data = await response.json();

        const tableBody = document.getElementById('productTableBody');
        tableBody.innerHTML = '';

        (Array.isArray(data) ? data : [data]).forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id || 'N/A'}</td>
                <td>${product.name}</td>
                <td>${Number(product.price).toFixed(2)}</td>
                <td>${product.category}</td>
                <td>${product.stock}</td>
                <td>
                    <button class="btn btn-outline-warning btn-sm" onclick="modifyProduct(${product.id})">Modificar</button>
                    <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${product.id})">Eliminar</button>
                </td>`;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error al listar productos:', error);
    }
}



// Buscar productos
document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim(); // Captura y limpia el valor del campo de búsqueda

    const url = query
        ? `http://localhost:5000/api/products?search=${encodeURIComponent(query)}`
        : `http://localhost:5000/api/products`; // Si el campo está vacío, muestra todos los productos

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al buscar productos');

        const products = await response.json();

        const tableBody = document.getElementById('productTableBody');
        tableBody.innerHTML = '';

        // Muestra los productos encontrados
        (Array.isArray(products) ? products : [products]).forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id || 'N/A'}</td>
                <td>${product.name}</td>
                <td>${Number(product.price).toFixed(2)}</td>
                <td>${product.category}</td>
                <td>${product.stock}</td>
                <td>
                    <button class="btn btn-outline-warning btn-sm" onclick="modifyProduct(${product.id})">Modificar</button>
                    <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${product.id})">Eliminar</button>
                </td>`;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error al buscar productos:', error);
        alert('No se encontraron productos.');
    }
});


// Crear producto
document.getElementById('createProduct').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const category = document.getElementById('category').value;
    const stock = parseInt(document.getElementById('stock').value, 10);

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price, category, stock })
        });

        if (!response.ok) throw new Error('Error al registrar producto');
        alert('Producto registrado exitosamente');
        await listProducts();
    } catch (error) {
        console.error(error);
    }
});

// Modificar producto
async function modifyProduct(id) {
    const name = prompt('Nuevo nombre del producto:');
    const price = parseFloat(prompt('Nuevo precio del producto:'));
    const category = prompt('Nueva categoría:');
    const stock = parseInt(prompt('Nueva cantidad en stock:'), 10);

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price, category, stock })
        });

        if (!response.ok) throw new Error('Error al modificar producto');
        alert('Producto modificado exitosamente');
        await listProducts();
    } catch (error) {
        console.error(error);
    }
}

// Eliminar producto
async function deleteProduct(id) {
    if (!confirm('¿Seguro que quieres eliminar este producto?')) return;
    try {
        const response = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Error al eliminar producto');
        alert('Producto eliminado exitosamente');
        await listProducts();
    } catch (error) {
        console.error(error);
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', listProducts);
