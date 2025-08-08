import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateOrder } from "./useCreateOrder";
import { useCartStore } from "../store/useCartStore";
import { NavLink } from "react-router-dom";
import SuccessModal from "../ui/SuccessModal";

const CheckoutForm = ({ cart }) => {
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { mutate: createOrder, isLoading } = useCreateOrder(() => {
    setShowSuccessModal(true);
    clearCart();
  });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      return toast.error("Please fill out all required fields.");
    }

    const orderData = {
      customerName: formData.name,
      phone: formData.phone,
      address: formData.address,
      paymentMethod: formData.paymentMethod,
      cartItems: cart.map(({ id, quantity }) => ({
        productId: id,
        quantity,
      })),
    };

    createOrder(orderData);
  };

  const handleCloseModal = useCallback(() => {
    setShowSuccessModal(false);
    navigate("/menu");
  }, [navigate]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f0f1e] border border-[#ff4d00]/30 p-6 rounded-xl shadow-lg w-full max-w-md"
      >
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-[#ff4d00]/20 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-[#ff4d00]/20 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Address</label>
          <textarea
            name="address"
            className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-[#ff4d00]/20 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Payment Method</label>
          <select
            name="paymentMethod"
            className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-[#ff4d00]/20 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="GCash">GCash</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#ff4d00] mt-2 p-2"
          disabled={isLoading}
        >
          {isLoading ? "Placing Order..." : "Place Order"}
        </button>
      </form>

      <NavLink
        className="text-[#ff4d00] font-lg mt-2"
        onClick={() => navigate(-1)}
      >
        &larr; Go back{" "}
      </NavLink>

      {showSuccessModal && <SuccessModal onCloseModal={handleCloseModal} />}
    </>
  );
};

export default CheckoutForm;
