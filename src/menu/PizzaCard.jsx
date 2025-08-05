const PizzaCard = ({ pizza, onClick }) => {
  const { imageUrl, name, description, price } = pizza;

  return (
    <div className="bg-[#1a1a2e] border border-[#ff4d00]/40 rounded-xl p-4 text-[#fff8e7] shadow-lg hover:shadow-[0_0_15px_#ff4d00] transition duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-4 border border-[#ff4d00]/20"
      />
      <h3 className="text-xl font-bold mb-2 text-[#ffe600]">{name}</h3>
      <p className="text-sm text-white/80 mb-3">{description}</p>

      <div>
        <p className="text-orange-400 text-xl font-bold">{price}</p>
      </div>
      <button
        className="mt-4 w-full bg-[#ff4d00] text-[#1a1a2e] px-4 py-2 rounded-md font-semibold hover:bg-[#ffe600] transition text-sm shadow-[0_0_10px_#ff4d00]"
        onClick={onClick}
      >
        Add to Order
      </button>
    </div>
  );
};

export default PizzaCard;
