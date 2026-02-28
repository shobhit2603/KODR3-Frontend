import { useContext } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { AppContext } from "../Context/Context";
import Card from "../components/Card";

export default function Wishlist() {
  const { products, wishlistItems } = useContext(AppContext);

  const wishlistProducts = products.filter((product) =>
    wishlistItems.includes(product.id),
  );

  return (
    <main className="bg-neutral-50 dark:bg-neutral-950 min-h-screen transition-colors duration-300">
      <Navbar />
      <Title
        title="Your Wishlist"
        subtitle="All your favourites at one place"
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto w-full">
        {wishlistProducts.length > 0 ? (
          wishlistProducts.map((card) => (
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
            <h3 className="text-xl font-medium text-neutral-500 dark:text-neutral-400 transition-colors">
              Your wishlist is empty
            </h3>
          </div>
        )}
      </section>
    </main>
  );
}
