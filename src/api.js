import { redirect } from "react-router-dom";
const BASE_URL = 'https://fakestoreapi.com';

export async function getProduct(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw {
      message: `Failed to fetch product with ID ${id}`,
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data;
}


export async function getAllProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) {
    throw {
      message: "Failed to fetch products",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data;
}

export function authLoader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return redirect("/signup");
  }
  return null; 
}

