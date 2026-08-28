import type { Product } from "@/types";

const BASE_URL = "https://fakestoreapi.com";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(
    `${BASE_URL}/products`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getProduct(
  id: string
): Promise<Product> {
  const response = await fetch(
    `${BASE_URL}/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}

export async function getCategories(): Promise<
  string[]
> {
  const response = await fetch(
    `${BASE_URL}/products/categories`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}