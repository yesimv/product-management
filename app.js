const apiUrl = 'http://localhost:5000/api/products';
// Listar productos
fetch(apiUrl)
 .then(response => response.json())
 .then(data => {
 const app = document.getElementById('app');
 data.forEach(product => {
 const div = document.createElement('div');
 div.innerHTML = `<p>${product.name} -
${product.price}</p>`;
 app.appendChild(div);
 });
}); 