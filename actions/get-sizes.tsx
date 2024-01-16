import { Size } from "@/types";

const URL = `http://localhost:3000/api/f3722163-6863-4915-befc-8ca57ffb61bb/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getSizes;
