import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import { cookies } from "next/headers";
import { LogoutButton } from "./LogoutButton";

export default async function Navbar() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("sessionToken");

  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div>
          <Link href="/">
            <h1 className="text-2xl tracking-tighter">ecom.</h1>
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Products
          </Link>
          <ModeToggle />
          {!sessionToken ? (
            <div className="flex items-center gap-2 ml-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Register</Button>
              </Link>
            </div>
          ) : (
            <LogoutButton />
          )}
        </div>
      </div>
    </nav>
  );
}
