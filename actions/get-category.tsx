import { Category } from "@/types";

const URL = `http://localhost:3000/api/f3722163-6863-4915-befc-8ca57ffb61bb/categories`;

const getCategory = async (id: string): Promise<Category> => {
  try {
    const response = await fetch(`${URL}/${id}`);

    if (!response.ok) {
      throw new Error(`API responded with status code: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching category:", error);
    return {} as Category;
  }
};

export default getCategory;
