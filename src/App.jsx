import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./ui/AppLayout";
import Hero from "./ui/Hero";
import ProductListing from "./menu/ProductListing";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CustomerLogin from "./pages/CustomerLogin";
import Signup from "./signup/Signup";
import CustomerProtectedRoute from "./login/CustomerProtectedRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Hero />} />

          <Route path="/" element={<AppLayout />}>
            <Route path="/menu" element={<ProductListing />} />
            <Route path="/menu/:id/order" element={<ProductListing />} />
            <Route path="/cart" element={<CartPage />} />

            <Route path="/login" element={<CustomerLogin />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              path="/checkout"
              element={
                <CustomerProtectedRoute>
                  <CheckoutPage />
                </CustomerProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
