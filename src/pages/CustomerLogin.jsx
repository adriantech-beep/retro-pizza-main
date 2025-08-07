import { useState } from "react";
// import axios from "../utils/axiosInstance"; // if you use a custom instance
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import { Link } from "react-router-dom";

const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/cart";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/api/customers/log-in", {
        email,
        password,
      });

      localStorage.setItem("customerToken", res.data.token);
      localStorage.setItem("customerEmail", res.data.email);
      localStorage.setItem("customerId", res.data.customerId);

      navigate(from);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a2e] text-white px-4">
      <form
        onSubmit={handleLogin}
        className="bg-[#0f0f1e] border border-[#ff4d00]/30 p-6 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl font-bold">Customer Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label>Please Enter Your Email Address</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-[#ff4d00]/20 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
          />
        </div>
        <div className="mb-4">
          <label>Please Enter Your Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-[#ff4d00]/20 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#ff4d00] hover:bg-[#e94300] text-white font-semibold py-2 px-4 rounded mt-4"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="text-[#ff4d00] underline">
          Create one
        </Link>
      </p>
    </div>
  );
};

export default CustomerLogin;
