import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

export function ProductCard({ product }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-card/40 backdrop-blur-md border-muted/60">
      <div className="relative w-full h-[280px] bg-white group p-6 flex items-center justify-center border-b border-border/40">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardHeader className="flex-none p-5 pb-3">
        <div className="flex justify-between items-start gap-4">
          <CardTitle
            className="line-clamp-2 text-base leading-snug font-semibold"
            title={product.title}
          >
            {product.title}
          </CardTitle>
          <p className="text-xl font-medium text-primary shrink-0">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </CardHeader>

      <CardContent className="grow p-5 pt-0">
        <div className="flex items-center gap-1.5 mb-3">
          <StarIcon className="w-4 h-4 fill-amber-500 text-amber-500" />
          <span className="text-sm font-bold text-foreground">
            {product.rating.rate}
          </span>
          <span className="text-xs font-medium text-muted-foreground ml-1">
            ({product.rating.count} reviews)
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 mt-auto">
        <Button variant="default">
          <ShoppingCartIcon className="w-5 h-5" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
