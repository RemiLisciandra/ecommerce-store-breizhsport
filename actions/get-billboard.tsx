import { Billboard } from "@/types";

const URL = `http://localhost:3000/api/f3722163-6863-4915-befc-8ca57ffb61bb/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBillboard;
