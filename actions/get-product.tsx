import { Product } from "@/types";

const URL = `http://localhost:3000/api/f3722163-6863-4915-befc-8ca57ffb61bb/products`;

const getProduct = async (id: string): Promise<Product> => {
  try {
    const response = await fetch(`${URL}/${id}`);

    if (!response.ok) {
      throw new Error(`API responded with status code: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return {} as Product;
  }
};

export default getProduct;
