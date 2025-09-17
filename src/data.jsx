import axios from "axios";
export async function fetchProducts() {
  const response = await axios("https://fakestoreapi.com/products");
  return response.data;
}

export let purchasedData = [];

export function purchaseProduct(data, amount) {
  const index = purchasedData.findIndex((p) => p.id === data.id);

  if (index !== -1) {
    purchasedData[index] = {
      ...purchasedData[index],
      amount: purchasedData[index].amount + amount,
    };
  } else {
    purchasedData.push({ ...data, amount: amount });
  }
}

export function unpurchaseData(id) {
  const index = purchasedData.findIndex((purchased) => purchased.id === id);
  purchasedData.splice(index, 1);
}

export function searchForProducts(query, products) {
  if (!query) return products;

  const result = products.filter((product) =>
    product.title
      .split(" ")
      .some((word) => word.toLowerCase().startsWith(query.toLowerCase()))
  );
  return result;
}
