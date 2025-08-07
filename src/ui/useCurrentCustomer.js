import { useQuery } from "@tanstack/react-query";
import { fetchCurrentCustomer } from "../services/apiFetchCurrentCustomer";

export const useCurrentCustomer = () => {
  const {
    data: customer,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: fetchCurrentCustomer,
    retry: false,
  });

  return { customer, isLoading, error };
};
