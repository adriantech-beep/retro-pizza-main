import { create } from "zustand";
import { persist } from "zustand/middleware";
import axiosInstance from "../services/axiosInstance";
// import axios from '../api/axios' // your axios instance

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

        // ✅ gets saved to Zustand AND localStorage
      },

      // login: async (credentials) => {
      //   const res = await axiosInstance.post("/auth/login", credentials);
      //   const { user, token } = res.data;
      //   set({ user, token });
      // },

      // signup: async (formData) => {
      //   const res = await axiosInstance.post("/auth/signup", formData);
      //   const { user, token } = res.data;
      //   set({ user, token });
      // },

      // logout: () => {
      //   set({ user: null, token: null });
      // },
    }),
    {
      name: "auth-storage", // localStorage key
    }
  )
);
