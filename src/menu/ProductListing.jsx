import Loader from "../ui/Loader";
import PizzaCard from "./PizzaCard";
import { useProducts } from "./useProducts";

const ProductListing = () => {
  const { products = [], isLoading } = useProducts();

  console.log(products);
  if (isLoading) return <Loader />;

  if (products?.length === 0)
    return <p className="text-center text-stone-800 mt-10">No pizzas found.</p>;

  return (
    <>
      <section
        id="menu"
        className="h-full bg-[#1a1a2e] py-20 px-6 text-[#fff8e7]"
      >
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
            <PizzaCard key={pizza._id} {...pizza} id={pizza._id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductListing;
