export const getProducts = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
    const data = await res.json();
    return data.products || [];
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
};
