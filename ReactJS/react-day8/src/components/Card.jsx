import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../Context/Context";

export default function Card({
  id,
  image,
  title,
  description,
  price = "$99.99",
}) {
  const {
    addToCart,
    removeFromCart,
    getCartQuantity,
    toggleWishlist,
    isInWishlist,
  } = useContext(AppContext);

  const quantity = getCartQuantity(id);
  const isWishlisted = isInWishlist(id);

  return (
    // Added dark:bg-gray-800 dark:border-gray-700
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col h-full w-full max-w-sm mx-auto cursor-pointer">
      <div className="relative overflow-hidden aspect-4/3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(id);
          }}
          // Adjusted backdrop brightness for dark mode
          className={`absolute top-3 right-3 z-10 p-2 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
            isWishlisted
              ? "text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30"
              : "text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 hover:text-red-500"
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300" />
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex justify-between items-start gap-2">
          {/* dark:text-white dark:group-hover:text-blue-400 */}
          <h2 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h2>
          {/* dark:bg-green-900/30 dark:text-green-400 */}
          <span className="font-semibold text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-md text-xs">
            {price}
          </span>
        </div>

        {/* dark:text-gray-400 */}
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 grow">
          {description}
        </p>

        {quantity > 0 ? (
          <div className="w-full bg-gray-900 dark:bg-blue-600 text-white px-4 py-3 rounded-xl font-medium text-sm mt-2 flex items-center justify-between gap-2 shadow-lg shadow-blue-500/30">
            <button
              onClick={() => removeFromCart(id)}
              className="p-1 hover:bg-gray-700 dark:hover:bg-blue-700 rounded-lg transition-colors active:scale-90 cursor-pointer"
            >
              <Minus size={16} />
            </button>
            <span className="flex items-center gap-2 font-bold">
              {quantity}
            </span>
            <button
              onClick={() => addToCart(id)}
              className="p-1 hover:bg-gray-700 dark:hover:bg-blue-700 rounded-lg transition-colors active:scale-90 cursor-pointer"
            >
              <Plus size={16} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(id)}
            // Changed default button color in dark mode to match theme
            className="w-full bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-4 py-3 rounded-xl font-medium text-sm mt-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn active:scale-95 cursor-pointer"
          >
            <ShoppingBag
              size={18}
              className="transition-transform group-hover/btn:-translate-y-0.5"
            />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
