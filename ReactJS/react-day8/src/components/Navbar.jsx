import { Heart, House, ShoppingCart, Store, Sun } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex gap-2 items-center cursor-pointer group">
          <div className="p-2 bg-blue-600 rounded-lg text-white transform group-hover:rotate-12 transition-transform duration-300">
            <Store size={24} />
          </div>
          <h1 className="font-bold text-2xl tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
            Store
          </h1>
        </div>

        <div className="flex gap-4 items-center">
          <button
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-all duration-300 active:scale-95 cursor-pointer"
            aria-label="Home"
          >
            <House size={20} />
          </button>

          <button
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-red-500 transition-all duration-300 active:scale-95 cursor-pointer"
            aria-label="Wishlist"
          >
            <Heart size={20} />
          </button>

          <button
            className="relative p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-all duration-300 active:scale-95 cursor-pointer"
            aria-label="Cart"
          >
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
              2
            </span>
          </button>

          <div className="w-px h-6 bg-gray-200 mx-1 hidden sm:block"></div>

          <button
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-yellow-500 transition-all duration-300 active:scale-95 cursor-pointer"
            aria-label="Theme Toggle"
          >
            <Sun size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
