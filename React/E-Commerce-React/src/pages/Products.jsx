import { Link } from "react-router-dom";
import products from "../data/products";

export default function Products() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="border p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 bg-white"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-xl"
          />

          <h3 className="mt-3 font-semibold text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.category}</p>

          <div className="mt-2 flex items-center justify-between">
            <div>
              <span className="font-bold text-lg text-neutral-700">
                ₹{product.discountPrice}
              </span>
              <span className="line-through text-gray-400 ml-2 text-sm">
                ₹{product.price}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
