// JavaScript for Car Accessories Store Website

// Fetch and render products from the API
const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error('Error:', error);
        const productList = document.querySelector('.product-list');
        if (productList) {
            productList.innerHTML = `<p class="error">Unable to load products. Please try again later.</p>`;
        }
    }
};

// Render products dynamically
const renderProducts = (products) => {
    const productList = document.querySelector('.product-list');
    if (productList) {
        productList.innerHTML = ''; // Clear any existing content
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>Price: ${product.price}</strong></p>
                <button class="add-to-cart">Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });
        attachAddToCartHandlers(); // Attach event listeners to buttons
    }
};

// Render testimonials (customer reviews) dynamically
const renderReviews = (reviews) => {
    const reviewsList = document.querySelector('.Reviewslist');
    if (reviewsList) {
        reviewsList.innerHTML = ''; // Clear any existing content
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review-item');
            reviewElement.innerHTML = `
                <p>"${review.feedback}"</p>
                <p class="customer-name">- ${review.name}</p>
            `;
            reviewsList.appendChild(reviewElement);
        });
    }
};

// Attach event listeners to "Add to Cart" buttons
const attachAddToCartHandlers = () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    });
};

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts(); // Fetch and render products
    renderReviews([
        { name: "John Doe", feedback: "Great products! Improved my driving experience." },
        { name: "Jane Smith", feedback: "Affordable and high-quality accessories." },
        { name: "Mike Johnson", feedback: "Customer service was excellent." },
    ]);
});

// Search functionality for the Blog page
const searchBar = document.getElementById('searchBar');
if (searchBar) {
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const blogs = document.querySelectorAll('.blog-list .blog-item');
        blogs.forEach(blog => {
            const title = blog.querySelector('h3').textContent.toLowerCase();
            blog.style.display = title.includes(query) ? 'block' : 'none';
        });
    });
}
