import { Category } from "@/types";

const URL = `http://localhost:3000/api/f3722163-6863-4915-befc-8ca57ffb61bb/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getCategory;
