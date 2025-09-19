import axios from "axios";

// Fetch products from API
export async function fetchProducts() {
  const response = await axios("https://fakestoreapi.com/products");
  return response.data;
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
