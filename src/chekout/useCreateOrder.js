import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createOrder } from "../services/apiOrders";

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      toast.success("Order created");
      queryClient.invalidateQueries(["orders"]);
    },
    onError: (err) => {
      if (err.response?.status === 422) {
        toast.error(err.response.data?.message);
      } else {
        toast.error("Something went wrong.");
      }
    },
  });
};
