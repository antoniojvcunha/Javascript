// Fetch the list of categories from the API
async function getCategoryList() {
    const url = "https://dummyjson.com/products/category-list";
    const response = await fetch(url);
    const result = await response.json();
    
    createCategoryList(result);
}


function createCategoryList(categoriesData) {
    const dropdownCategoryList = document.querySelector("#dropdownCategoryList");
    dropdownCategoryList.innerHTML = ""; // Clear existing options
    for (let i = 0; i < categoriesData.length; i++) {
        dropdownCategoryList.innerHTML += `<option value="${categoriesData[i]}">${categoriesData[i]}</option>`;
    }
}


function sortOrder(products, order) {
    return products.sort((a, b) => {
        if (order === "asc") {
            return a.price - b.price; // Ascending
        } else if (order === "desc") {
            return b.price - a.price; // Descending
        }
    });
}


async function fetchProducts(category, sortOrderValue = "asc") {
    const url = `https://dummyjson.com/products/category/${category}`;
    const response = await fetch(url);
    const result = await response.json();

    
    const sortedProducts = sortOrder(result.products, sortOrderValue);
    displayProducts(sortedProducts);
}


function displayProducts(products) {
    const infoProductsContainer = document.querySelector("#infoProductsContainer");
    infoProductsContainer.innerHTML = ""; 

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


function handleCategorySelection(event) {
    const selectedCategory = document.querySelector("#dropdownCategoryList").value;
    const selectedSortOrder = document.querySelector("#sortOrderDropdown").value; 
    if (selectedCategory) {
        fetchProducts(selectedCategory, selectedSortOrder); 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getCategoryList(); 
    const dropdownCategoryList = document.querySelector("#dropdownCategoryList");
    dropdownCategoryList.addEventListener("change", handleCategorySelection); // Add event listener for category change

    const sortOrderDropdown = document.querySelector("#sortOrderDropdown");
    sortOrderDropdown.addEventListener("change", handleCategorySelection); // Add event listener for sort order change
});
