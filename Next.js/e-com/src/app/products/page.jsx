import React from "react";
import { ProductCard } from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-12 md:mb-16 space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/60">
            Our Collection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Discover our curated selection of premium products. Quality meets
            elegant design in every piece.
          </p>
        </div>

        <div
          className="grid gap-6 md:gap-8 lg:gap-10"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
