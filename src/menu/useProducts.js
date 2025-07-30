import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiProducts";

export const useProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryFn: getProducts,
    queryKey: ["products"],
  });

  return { products, isLoading };
};
