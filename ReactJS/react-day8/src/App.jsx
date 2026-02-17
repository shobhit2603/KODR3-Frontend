import { useContext } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { AppContext } from "./Context/Context";

export default function App() {
  const { products } = useContext(AppContext);
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-5">
        <h2 className="text-2xl">Shop Trending Products</h2>
        <p className="text-gray-600">
          Discover the latest trends in fashion and electronics
        </p>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto w-full">
        {products.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              price={card.price}
            />
          );
        })}
      </section>
    </main>
  );
}
