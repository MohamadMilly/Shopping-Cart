import axios from "axios";

// Fetch products from API
export async function fetchProducts() {
  const response = await axios("https://fakestoreapi.com/products");
  return response.data;
}

// Initialize localStorage if empty
if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify([]));
}

// Always get the latest purchased data
export function getPurchasedData() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

// Add or update a purchased product
export function purchaseProduct(data, amount) {
  const products = getPurchasedData();
  const index = products.findIndex((p) => p.id === data.id);

  if (index !== -1) {
    products[index] = {
      ...products[index],
      amount: products[index].amount + amount,
    };
  } else {
    products.push({ ...data, amount });
  }

  set(products);
}

// Remove a purchased product by ID
export function unpurchaseData(id) {
  const products = getPurchasedData();
  const index = products.findIndex((p) => p.id === id);

  if (index !== -1) {
    products.splice(index, 1);
    set(products);
  }
}

// Search products by query
export function searchForProducts(query, products) {
  if (!query) return products;

  return products.filter((product) =>
    product.title
      .split(" ")
      .some((word) => word.toLowerCase().startsWith(query.toLowerCase()))
  );
}

// Save products to localStorage
function set(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

// Export purchasedData as a getter-like function
export const purchasedData = () => getPurchasedData();
