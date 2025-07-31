import axiosInstance from "./axiosInstance";

export const getProducts = async () => {
  try {
    const { data } = await axiosInstance.get("/api/products");
    return data.products;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
};
