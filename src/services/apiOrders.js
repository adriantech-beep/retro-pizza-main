import axiosInstance from "./axiosInstance";

export const createOrder = async (order) => {
  const { data } = await axiosInstance.post("/api/orders/create-order", order);

  return data;
};
