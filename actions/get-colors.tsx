import { Color } from "@/types";

const URL = `http://localhost:3000/api/f3722163-6863-4915-befc-8ca57ffb61bb/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getColors;
