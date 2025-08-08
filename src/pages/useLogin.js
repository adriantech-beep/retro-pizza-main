import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
export const useLogin = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) => login(formData),
    onSuccess: () => {
      toast.success("Login successful");
      navigate("/cart");
      queryClient.invalidateQueries(["customers"]);
    },
    onError: (err) => {
      if (err.response?.status === 403) {
        toast.error(err.response.data?.message);
      } else {
        toast.error("Login failed.");
      }
    },
  });
};
