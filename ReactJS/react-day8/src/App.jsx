import { useContext } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { AppContext } from "./Context/Context";
import Title from "./components/Title";

export default function App() {
  const { products } = useContext(AppContext);
  return (
    // dark:bg-gray-950
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Navbar />
      <Title
        title="Shop Trending Products"
        subtitle="Discover the latest trends in fashion and electronics"
      />
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
