import axios from "$utils/axios";

export const get = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};
