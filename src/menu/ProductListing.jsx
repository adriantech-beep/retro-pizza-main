import { useProducts } from "./useProducts";
import Loader from "../ui/Loader";
import PizzaCard from "./PizzaCard";
import ConfirmOrderModal from "./ConfirmOrderModal";
import ModalWindow from "../ui/ModalWindow";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
  const { products = [], isLoading } = useProducts();
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleOpenModal = useCallback(
    (item) => {
      setSelectedItem(item);
      navigate(`/menu/${item.id}/order`);
    },
    [navigate]
  );

  if (isLoading) return <Loader />;

  if (products.length === 0)
    return <p className="text-center text-stone-800 mt-10">No pizzas found.</p>;

  return (
    <ModalWindow>
      <section className="min-h-screen h-full bg-[#1a1a2e] py-20 px-6 text-[#fff8e7]">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-[Orbitron] text-[#ff4d00] drop-shadow-[0_0_10px_#ff4d00]">
            Select Your Pizza
          </h2>
          <p className="text-white/70 mt-2">
            Power up your order with our retro specials 🍕
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((pizza) => (
            <ModalWindow.Open opens="confirm-order" key={pizza.id}>
              <PizzaCard pizza={pizza} onClick={() => handleOpenModal(pizza)} />
            </ModalWindow.Open>
          ))}
        </div>
      </section>

      <ModalWindow.Window name="confirm-order">
        <ConfirmOrderModal orderItem={selectedItem} />
      </ModalWindow.Window>
    </ModalWindow>
  );
};

export default ProductListing;
