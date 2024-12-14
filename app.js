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

// Buscar productos  con Listener input en lugar submit de para busqueda tiempo real
document.getElementById('searchInput').addEventListener('input', async (e) => {
    const query = e.target.value.trim();

    const url = query
        ? `http://localhost:5000/api/products?search=${encodeURIComponent(query)}`
        : `http://localhost:5000/api/products`; // Si el campo está vacío, muestra todos los productos

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al obtener productos');

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
        console.error('Error al obtener productos:', error);
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


    const product = await getProduct(id);  
    //ES mejor ver los campos con la info. a modificar usar modal u otra ventana
    const input = prompt(
        `Modifica los valores del producto:\n` +
        `Nombre: ${product.name}\n` +
        `Precio: ${product.price}\n` +
        `Categoría: ${product.category}\n` +
        `Stock: ${product.stock}\n\n` +
        `Ingresa los nuevos valores separados por comas (ejemplo: "Nuevo nombre, 15.99, Nueva categoría, 50")`
    );

    //Ingresasr todos los datos a cambiar , Como un formato ejemplo: "Nuevo nombre, 15.99, Nueva categoría, 50
    if (input) {
        // Separar los valores  por comas
        const [name, price, category, stock] = input.split(',').map(item => item.trim());

        // Validación 
        if (!name || !category || isNaN(price) || isNaN(stock) || parseFloat(price) <= 0 || parseInt(stock) < 0) {
            alert('Todos los campos son obligatorios y deben ser válidos. Asegúrate de que el precio sea un número positivo y el stock no sea negativo.');
            return;
        }

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: 
            JSON.stringify({ name, price, category, stock })
        });

        if (!response.ok) throw new Error('Error al modificar producto');
        alert('Producto modificado exitosamente');
        await listProducts();
    } catch (error) {
        console.error(error);
    }
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

//Obtener un producto
async function getProduct(id) {
    try {
        // 
        const response = await fetch(`${apiUrl}/${id}`);
        
        if (!response.ok) throw new Error('No se pudo obtener el producto');
        
             const product = await response.json();
        
        return product;
        
        
    } catch (error) {
        console.error('Error al obtener el producto:', error);
    }
}

const inputCategory = document.getElementById('category');  //Para mostar la lista
// Obtener category
getCategories().then(categories => {
    if (categories) {
        inputCategory.setAttribute('list', 'category-list'); 
        const dataList = document.createElement('datalist'); 
        dataList.id = 'category-list'; 
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category; 
            dataList.appendChild(option); 
        });
        document.body.appendChild(dataList); // PAra mostra la lista en el html
    }
});


//Para obtener las categorias
async function getCategories() {
    try {
        const response = await fetch(`${apiUrl}/categories`); 

        if (!response.ok) throw new Error('No se pudo obtener las categorías');

        const categories = await response.json();
        const datalistElement = document.getElementById('categories');
 
        datalistElement.innerHTML = '';

        //Agregar las categorías al datalist
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;  
            datalistElement.appendChild(option);  
        });

    } catch (error) {
        console.error('Error al obtener las categorías:', error);
    }
}

//Prevenir numeros  retunr True para permitir False para no permitir
function isLetter(event) {
    var char = String.fromCharCode(event.charCode || event.keyCode);  // Obtiene el carácter presionado
    
    //Expresión regular para solo letras y con acento
    var pattern = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑçÇ]+$/;
    
    if (pattern.test(char)) {
      return true;
    }

    return false;
  }


// Inicializar
document.addEventListener('DOMContentLoaded', listProducts);