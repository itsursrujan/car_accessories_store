document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:8080/api/products')
        .then(response => response.json())
        .then(data => {
            const productList = document.querySelector('.product-list');
            data.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p><strong>${product.price}</strong></p>
                `;
                productList.appendChild(productItem);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
