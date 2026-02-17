import { createContext, useState } from "react";
import { cardData } from "../data/cardData";

const AppContext = createContext();

const getProducts = () => {
  const storedProducts = localStorage.getItem("products");
  return storedProducts ? JSON.parse(storedProducts) : cardData;
};

const getCart = () => {
  const storedCart = localStorage.getItem("cartItem");
  return storedCart ? JSON.parse(storedCart) : [];
};

const getWishlist = () => {
  const storedWishlist = localStorage.getItem("wishlistItems");
  return storedWishlist ? JSON.parse(storedWishlist) : [];
};

// --- Dark Mode Logic Helper ---
const getInitialTheme = () => {
  // 1. Check Local Storage
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    // Apply class immediately
    if (storedTheme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    return storedTheme;
  }

  // 2. Check System Preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
    return "dark";
  }

  // 3. Default to light
  document.documentElement.classList.remove("dark");
  return "light";
};

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState(getProducts);
  const [cartItems, setCartItems] = useState(getCart);
  const [wishlistItems, setWishlistItems] = useState(getWishlist);

  // Initialize theme state using the helper
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Direct DOM manipulation (No useEffect needed)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem("cartItem", JSON.stringify(newCart));
  };

  const updateWishlist = (newWishlist) => {
    setWishlistItems(newWishlist);
    localStorage.setItem("wishlistItems", JSON.stringify(newWishlist));
  };

  const addToCart = (productId) => {
    const existingItem = cartItems.find((item) => item.id === productId);
    let newCart;

    if (existingItem) {
      newCart = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      );
    } else {
      newCart = [...cartItems, { id: productId, quantity: 1 }];
    }
    updateCart(newCart);
  };

  const removeFromCart = (productId) => {
    const existingItem = cartItems.find((item) => item.id === productId);
    if (!existingItem) return;

    let newCart;

    if (existingItem.quantity === 1) {
      newCart = cartItems.filter((item) => item.id !== productId);
    } else {
      newCart = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
      );
    }
    updateCart(newCart);
  };

  const getCartQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const toggleWishlist = (productId) => {
    let newWishlist;
    if (wishlistItems.includes(productId)) {
      newWishlist = wishlistItems.filter((id) => id !== productId);
    } else {
      newWishlist = [...wishlistItems, productId];
    }
    updateWishlist(newWishlist);
  };

  const isInWishlist = (productId) => wishlistItems.includes(productId);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  const value = {
    products,
    setProducts,
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    getCartQuantity,
    toggleWishlist,
    isInWishlist,
    cartCount,
    wishlistCount,
    theme, // Exported
    toggleTheme, // Exported
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
export { AppContext };
