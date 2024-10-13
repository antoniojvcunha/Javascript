// Fetch the list of categories from the API
async function getCategoryList() {
    const url = "https://dummyjson.com/products/category-list";
    const response = await fetch(url);
    const result = await response.json();
    
    createCategoryList(result);
}

// Create dropdown for category selection
function createCategoryList(categoriesData) {
    const dropdownCategoryList = document.querySelector("#dropdownCategoryList");
    dropdownCategoryList.innerHTML = ""; // Clear existing options
    for (let i = 0; i < categoriesData.length; i++) {
        dropdownCategoryList.innerHTML += `<option value="${categoriesData[i]}">${categoriesData[i]}</option>`;
    }
}

// Separate sorting logic into its own function
function sortOrder(products, order) {
    return products.sort((a, b) => {
        if (order === "asc") {
            return a.price - b.price; // Ascending
        } else if (order === "desc") {
            return b.price - a.price; // Descending
        }
    });
}

// Fetch products for the selected category and sort them by price if needed
async function fetchProducts(category, sortOrderValue = "asc") {
    const url = `https://dummyjson.com/products/category/${category}`;
    const response = await fetch(url);
    const result = await response.json();

    // Call the sortOrder function to sort the products
    const sortedProducts = sortOrder(result.products, sortOrderValue);
    displayProducts(sortedProducts);
}

// Display products in the container
function displayProducts(products) {
    const infoProductsContainer = document.querySelector("#infoProductsContainer");
    infoProductsContainer.innerHTML = ""; // Clear previous content

    if (products.length === 0) {
        infoProductsContainer.innerHTML = "<p>No products available in this category.</p>";
    } else {
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            infoProductsContainer.innerHTML += 
            `<div class="product-card">
                <h3>${product.title}</h3>
                <img src="${product.thumbnail}" alt="${product.title}" />
                <p>Preço: €${product.price}</p>
            </div>`;
        }
    }
}

// Handle category selection and sort order selection
function handleCategorySelection(event) {
    const selectedCategory = document.querySelector("#dropdownCategoryList").value;
    const selectedSortOrder = document.querySelector("#sortOrderDropdown").value; // Get selected sort order
    if (selectedCategory) {
        fetchProducts(selectedCategory, selectedSortOrder); // Fetch products and sort based on the sort order
    }
}

// Add event listeners on DOM content load
document.addEventListener("DOMContentLoaded", () => {
    getCategoryList(); // Populate the category dropdown
    const dropdownCategoryList = document.querySelector("#dropdownCategoryList");
    dropdownCategoryList.addEventListener("change", handleCategorySelection); // Add event listener for category change

    const sortOrderDropdown = document.querySelector("#sortOrderDropdown");
    sortOrderDropdown.addEventListener("change", handleCategorySelection); // Add event listener for sort order change
});
