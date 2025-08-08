import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
export const useLogout = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      logout();
    },
    onSuccess: () => {
      toast.success("Logout successful");
      queryClient.removeQueries({ queryKey: ["customers"], exact: true });
      navigate("/cart");
    },
    onError: () => {
      toast.error("Logout failed");
    },
  });
};
