import { useCallback, useState } from "react";
import { useCartStore } from "../store/useCartStore";
import ConfirmOrderModal from "./ConfirmOrderModal";
import AnimatedNumbers from "react-animated-numbers";

const PizzaCard = ({ imageUrl, name, description, price, id }) => {
  const [quantity, setQuantity] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAdd = useCallback(() => {
    addToCart({ id, name, price, imageUrl, quantity });
    setShowConfirm(false);
  }, [addToCart, id, name, price, imageUrl, quantity]);

  return (
    <div className="bg-[#1a1a2e] border border-[#ff4d00]/40 rounded-xl p-4 text-[#fff8e7] shadow-lg hover:shadow-[0_0_15px_#ff4d00] transition duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-4 border border-[#ff4d00]/20"
      />
      <h3 className="text-xl font-bold mb-2 text-[#ffe600]">{name}</h3>
      <p className="text-sm text-white/80 mb-3">{description}</p>

      <div className="flex items-center justify-between mt-4">
        <div className="container">
          <AnimatedNumbers
            useThousandsSeparator
            transitions={(index) => ({
              type: "spring",
              duration: index + 0.3,
            })}
            animateToNumber={price}
            fontStyle={{
              fontSize: 40,
              color: "red",
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            className="px-2 py-1 text-white bg-gray-700 rounded"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            className="px-2 py-1 text-white bg-gray-700 rounded"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>
      </div>

      <button
        className="mt-4 w-full bg-[#ff4d00] text-[#1a1a2e] px-4 py-2 rounded-md font-semibold hover:bg-[#ffe600] transition text-sm shadow-[0_0_10px_#ff4d00]"
        onClick={() => setShowConfirm(true)}
      >
        Add to Order
      </button>

      {showConfirm && (
        <ConfirmOrderModal
          onHandleAdd={handleAdd}
          setShowConfirm={setShowConfirm}
          quantity={quantity}
        />
      )}
    </div>
  );
};

export default PizzaCard;
