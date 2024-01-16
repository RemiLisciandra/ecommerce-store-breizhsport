import { Size } from "@/types";

const URL = `http://localhost:3000/api/f3722163-6863-4915-befc-8ca57ffb61bb/sizes`;

const getSizes = async (): Promise<Size[]> => {
  if (!URL.startsWith("http")) {
    console.error("Invalid API URL:", URL);
    return [];
  }

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`API responded with status code: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching sizes:", error);
    return [];
  }
};

export default getSizes;
