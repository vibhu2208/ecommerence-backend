
//display products
function displayProducts(products, container) {
  container.innerHTML = '';
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product-item';
    productDiv.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p class="price">$${product.price.toFixed(2)}</p>
      <p class="discount">${product.discount}% off</p>
    `;
    container.appendChild(productDiv);
  });
}

// Fetch and display all products or search results
function fetchProducts(query = '') {
  const productsContainer = document.getElementById('products');
  const resultsContainer = document.getElementById('results');
  fetch(`http://localhost:3000/products?query=${query}`)
    .then(response => response.json())
    .then(products => {
      if (query.length > 3) {
        displayProducts(products, resultsContainer);
        productsContainer.style.display = 'none';
        resultsContainer.style.display = 'flex';
      } else {
        displayProducts(products, productsContainer);
        resultsContainer.style.display = 'none';
        productsContainer.style.display = 'flex';
      }
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
}

// Initial fetch for all products
document.addEventListener('DOMContentLoaded', function () {
  fetchProducts();

  // Search functionality
  const searchInput = document.getElementById('search-input');
  
  searchInput.addEventListener('input', function () {
    const query = this.value;
    fetchProducts(query);
  });
});
