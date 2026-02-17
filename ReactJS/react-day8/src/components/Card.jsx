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
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full w-full max-w-sm mx-auto cursor-pointer">
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
          className={`absolute top-3 right-3 z-10 p-2 rounded-full bg-white/70 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${isWishlisted ? "text-red-500 hover:bg-red-50" : "text-gray-700 hover:bg-white hover:text-red-500"}`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex justify-between items-start gap-2">
          <h2 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {title}
          </h2>
          <span className="font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md text-xs">
            {price}
          </span>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 grow">
          {description}
        </p>

        {quantity > 0 ? (
          <div className="w-full bg-gray-900 text-white px-4 py-3 rounded-xl font-medium text-sm mt-2 flex items-center justify-between gap-2 shadow-lg shadow-blue-500/30">
            <button
              onClick={() => removeFromCart(id)}
              className="p-1 hover:bg-gray-700 rounded-lg transition-colors active:scale-90 cursor-pointer"
            >
              <Minus size={16} />
            </button>
            <span className="flex items-center gap-2 font-bold">
              {quantity}
            </span>
            <button
              onClick={() => addToCart(id)}
              className="p-1 hover:bg-gray-700 rounded-lg transition-colors active:scale-90 cursor-pointer"
            >
              <Plus size={16} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(id)}
            className="w-full bg-gray-900 text-white px-4 py-3 rounded-xl font-medium text-sm mt-2 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn active:scale-95 cursor-pointer"
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
