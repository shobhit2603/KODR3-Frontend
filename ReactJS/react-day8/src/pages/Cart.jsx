import { useContext } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { AppContext } from "../Context/Context"; 
import Card from "../components/Card";

export default function Cart() {
  const { products, cartItems } = useContext(AppContext);

  const cartProducts = products.filter((product) =>
    cartItems.some((item) => item.id === product.id),
  );

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <Title title="Your Cart" subtitle="Manage your cart items" />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto w-full">
        {cartProducts.length > 0 ? (
          cartProducts.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              price={card.price}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h3 className="text-xl font-medium text-gray-500">
              Your cart is empty
            </h3>
          </div>
        )}
      </section>
    </main>
  );
}
