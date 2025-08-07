import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/useAuthStore.js";

const Signup = () => {
  const { signup } = useAuthStore();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast.error("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      await signup({ email, password, confirmPassword });
      toast.success("Signup successful!");
      navigate("/cart");
    } catch (err) {
      const message = err.response?.data?.message || "Signup failed.";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a2e] text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f0f1e] border border-[#ff4d00]/30 p-6 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-[#ff4d00] mb-6 font-[Orbitron]">
          Create An Account
        </h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-[#ff4d00]/20 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-[#ff4d00]/20 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Confirm Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-[#ff4d00]/20 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#ff4d00] hover:bg-[#e94300] text-white font-semibold py-2 px-4 rounded mt-4"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-[#ff4d00] underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Signup;
