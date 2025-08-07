import axiosInstance from "./axiosInstance";

export const fetchCurrentCustomer = async () => {
  const { data } = await axiosInstance.get("/api/customers/customer");
  return data.customer;
};
