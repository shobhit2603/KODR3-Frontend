import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppContextProvider from "./Context/Context.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart.jsx";
import Wishlist from "./Pages/Wishlist.jsx";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  </AppContextProvider>,
);