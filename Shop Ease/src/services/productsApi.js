const API_URL = "https://dummyjson.com";

export async function getAllProducts() {
  try {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) throw Error("Failed getting products list");
    const { products } = await res.json();
    return products;
  } catch {
    throw new Error("Failed fetching products");
  }
}

export async function getProductById(id) {
  try {
    const res = await fetch(`${API_URL}/products/${id}`);
    if (!res.ok) throw Error(`Product with id ${id} not found`);
    const data = await res.json();
    return data;
  } catch {
    throw new Error("Failed fetching product details");
  }
}
export const fetchCartItems = async () => {
  const res = await fetch("https://example.com/api/cart");
  if (!res.ok) throw new Error("Failed to fetch cart");
  return res.json();
};

export async function getCategories() {
  try {
    const res = await fetch(`${API_URL}/products/categories`);
    if (!res.ok) throw Error("Failed getting categories");
    const data = await res.json();
    return data;
  } catch {
    throw new Error("Failed fetching categories");
  }
}

export async function getProductsByCategory(category) {
  const formattedCategory = category.toLowerCase().replace(/\s+/g, "-");
  const res = await fetch(`${API_URL}/products/category/${formattedCategory}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json(); // { products: [...] }
}



export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/carts/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    });
    if (!res.ok) throw Error("Failed creating order");
    const data = await res.json();
    return data;
  } catch {
    throw new Error("Failed creating your order");
  }
}

export async function updateCart(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/carts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateObj),
    });
    if (!res.ok) throw Error("Failed updating cart");
    const data = await res.json();
    return data;
  } catch {
    throw new Error("Failed updating cart");
  }
}
export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
