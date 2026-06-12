import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';

export const metadata = {
  title: 'ecom. | Minimalist Shopping',
  description: 'Premium products delivered to you.',
};

async function getFeaturedProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products?limit=4', {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const products = await getFeaturedProducts();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-muted via-background to-background" />
        
        <div className="container relative z-10 px-6 py-24 md:py-40 mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            New Fall Collection Available
          </div>
          
          <h1 className="text-4xl tracking-tight sm:text-6xl md:text-7xl mb-6 max-w-4xl text-foreground">
            Discover your <span className='text-violet-500'>next</span> favorite thing.
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
            A highly curated selection of premium apparel and electronics. Designed for modern life, built to last.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link href="/products" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base rounded-full">
                Shop the Collection
              </Button>
            </Link>
            <Link href="/register" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 h-12 text-base rounded-full">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-background">
        <div className="container px-6 mx-auto">
          <div className="mb-12 flex flex-col sm:flex-row justify-between items-end gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Shop by Category</h2>
              <p className="text-muted-foreground">Find exactly what you need.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Electronics', 'Jewelry', "Men's Clothing", "Women's Clothing"].map((category, idx) => (
              <div 
                key={idx} 
                className="group relative p-8 rounded-2xl border border-border/50 bg-muted/20 hover:bg-muted/50 transition-colors flex flex-col justify-between h-48 cursor-pointer"
              >
                <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center shadow-sm border border-border/50 mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="m9 18 6-6-6-6"/></svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground tracking-tight">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 border-t border-border/40 bg-muted/10">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Trending Now</h2>
              <p className="text-muted-foreground">Our most popular products this week.</p>
            </div>
            <Link href="/products" className="hidden sm:inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4">
              View all products
              <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="max-w-sm mx-auto sm:max-w-none w-full">
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              // Fallback skeleton
              Array(4).fill(0).map((_, i) => (
                <div key={i} className="h-[400px] rounded-xl bg-muted animate-pulse" />
              ))
            )}
          </div>
          
          <div className="mt-12 sm:hidden flex justify-center">
            <Link href="/products" className="w-full">
              <Button variant="outline" className="w-full h-12 rounded-full">
                View all products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-border/40">
        <div className="container px-6 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:max-w-xl text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Stay in the loop</h2>
            <p className="text-lg text-muted-foreground">
              Sign up for our newsletter to get early access to new collections and exclusive discounts. No spam, ever.
            </p>
          </div>
          <div className="w-full lg:max-w-md flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="name@example.com" 
              className="flex h-12 w-full rounded-full border border-input bg-background px-4 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
            <Button className="h-12 px-8 rounded-full shadow-sm shrink-0">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 bg-background">
        <div className="container px-6 mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ecom. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
