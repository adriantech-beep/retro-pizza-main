import CheckoutForm from "../chekout/CheckoutForm";
import { useCartStore } from "../store/useCartStore.js";

const CheckoutPage = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center  px-4 py-12 text-[#fff8e7]">
      <div className="w-full max-w-md bg-[#0f0f1c] rounded-2xl shadow-lg p-8 space-y-6 mt-5">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#ff4d00] tracking-tight mb-1">
            Checkout
          </h2>
          <p className="text-sm text-[#f1e9d7]">Review your order below</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold border-b border-[#2c2c3e] pb-2 mb-4">
            Order Summary
          </h3>
          <ul className="space-y-3">
            {cart?.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center text-sm border-b border-[#2c2c3e] pb-2"
              >
                <span className="text-[#ff4d00]">
                  {item.name}{" "}
                  <span className="text-[#aaa]">× {item.quantity}</span>
                </span>
                <span className="font-medium">
                  ₱{item.price * item.quantity}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <CheckoutForm cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
