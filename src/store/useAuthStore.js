import { create } from "zustand";
import { persist } from "zustand/middleware";
import axiosInstance from "../services/axiosInstance";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,

      signup: async (formData) => {
        const res = await axiosInstance.post(
          "/api/customers/sign-up",
          formData
        );
        const { user, token } = res.data;
        set({ user, token });
        localStorage.setItem("customerToken", token);
      },

      login: async (formData) => {
        const res = await axiosInstance.post("/api/customers/log-in", formData);
        const { user, token } = res.data;
        set({ user, token });
        localStorage.setItem("customerToken", token);
      },

      logout: () => {
        set({ user: null, token: null });
        localStorage.removeItem("customerToken");
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
