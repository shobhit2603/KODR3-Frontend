import { Heart, House, ShoppingCart, Store, Sun, Moon } from "lucide-react";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/Context";

export default function Navbar() {
  const { cartCount, wishlistCount, theme, toggleTheme } =
    useContext(AppContext);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div
          onClick={() => navigate("/")}
          className="flex gap-2 items-center cursor-pointer group"
        >
          <div className="p-2 bg-blue-600 rounded-lg text-white transform group-hover:rotate-12 transition-transform duration-300">
            <Store size={24} />
          </div>
          <h1 className="font-bold text-2xl tracking-tight text-neutral-900 dark:text-white group-hover:text-blue-600 transition-colors">
            Store
          </h1>
        </div>

        <div className="flex gap-4 items-center">
          <Link to="/">
            <button
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 active:scale-95 cursor-pointer"
              aria-label="Home"
            >
              <House size={20} />
            </button>
          </Link>

          <Link to="/wishlist">
            <button
              className="relative p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-red-500 transition-all duration-300 active:scale-95 cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-neutral-900">
                  {wishlistCount}
                </span>
              )}
            </button>
          </Link>

          <Link to="/cart">
            <button
              className="relative p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 active:scale-95 cursor-pointer"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-neutral-900">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
          <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-700 mx-1 hidden sm:block"></div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-all duration-300 active:scale-95 cursor-pointer"
            aria-label="Theme Toggle"
          >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
