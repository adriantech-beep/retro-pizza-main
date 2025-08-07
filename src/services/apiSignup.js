import axiosInstance from "./axiosInstance";

export const signupUser = async (customer) => {
  const { data } = await axiosInstance.post("/api/customers/sign-up", customer);

  return data;
};
