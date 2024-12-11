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
document.addEventListener("DOMContentLoaded", () => {
    const productTable = document.getElementById("productTable");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.querySelector(".close");

    // Load Products (Simulated with Placeholder Data)
    const products = [
        { id: 1, name: "Producto A", categoty:"First", stock: 10, price: 25.0 },
        { id: 2, name: "Producto B", categoty:"Second", stock: 15, price: 30.0 },
    ];
    refreshProductTable();

    function refreshProductTable() {
        productTable.innerHTML = "";
        products.forEach((product) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.categoty}</td>
                <td>${product.stock}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td><button class="btn btn-primary btn-sm" onclick="openModifyModal(${product.id})">Modificar</button></td>
            `;
            productTable.appendChild(row);
        });
    }

    // Add Event Listeners for Forms
    document.getElementById("searchForm").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Buscar función aún no implementada.");
    });

    document.getElementById("registerForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre_producto").value;
        const category = parseInt(document.getElementById("category").value);
        const stock = parseInt(document.getElementById("stock").value);
        const precio = parseFloat(document.getElementById("precio_venta").value);

        products.push({ id: products.length + 1, name: nombre, category: categoria, stock, price: precio });
        refreshProductTable();
        alert("Producto registrado exitosamente.");
    });

    document.getElementById("deleteForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const id = parseInt(e.target.idreg.value);
        const index = products.findIndex((product) => product.id === id);
        if (index !== -1) {
            products.splice(index, 1);
            refreshProductTable();
            alert("Producto eliminado exitosamente.");
        } else {
            alert("Producto no encontrado.");
        }
    });

    // Modal Functions
    window.openModifyModal = (id) => {
        const product = products.find((p) => p.id === id);
        if (!product) return;
        modal.style.display = "flex";
        document.getElementById("modal-id").value = product.id;
        document.getElementById("modal-nomp").value = product.name;
        document.getElementById("modal-cat").value = product.categoty;
        document.getElementById("modal-stoc").value = product.stock;
        document.getElementById("modal-prev").value = product.price;
    };

    closeModalBtn.addEventListener("click", closeModal);
    function closeModal() {
        modal.style.display = "none";
    }

    document.getElementById("modifyForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const id = parseInt(document.getElementById("modal-id").value);
        const name = document.getElementById("modal-nomp").value;
        const category = parseInt(document.getElementById("modal-cat").value);
        const stock = parseInt(document.getElementById("modal-stoc").value);
        const price = parseFloat(document.getElementById("modal-prev").value);

        const product = products.find((p) => p.id === id);
        if (product) {
            product.name = name;
            product.categoty = category;
            product.stock = stock;
            product.price = price;
            refreshProductTable();
            closeModal();
            alert("Producto modificado exitosamente.");
        }
    });
});
