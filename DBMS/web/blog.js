document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:8080/api/blogs')
        .then(response => response.json())
        .then(data => {
            const blogList = document.querySelector('.blog-list');
            data.forEach(blog => {
                const blogItem = document.createElement('div');
                blogItem.classList.add('blog-item');
                blogItem.innerHTML = `
                    <h3>${blog.title}</h3>
                    <p>${blog.summary}</p>
                `;
                blogList.appendChild(blogItem);
            });
        })
        .catch(error => console.error('Error fetching blogs:', error));
});
