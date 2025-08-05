// App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./ui/AppLayout";
import Hero from "./ui/Hero";
import ProductListing from "./menu/ProductListing";
import CartPage from "./pages/CartPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          {/* Public landing page */}
          <Route path="/" element={<Hero />} />

          {/* AppLayout for inner pages */}
          <Route path="/" element={<AppLayout />}>
            <Route path="menu" element={<ProductListing />} />
            <Route path="/menu/:id/order" element={<ProductListing />} />
            <Route path="cart" element={<CartPage />} />
            {/* Add more routes here as needed */}
          </Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
