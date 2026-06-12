import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5 border-b border-neutral-400 dark:border-neutral-800">
      <div>
        <Link href="/">
          <h1 className="text-2xl">ecom.</h1>
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <Link href="/">
          <Button variant="outline">Home</Button>
        </Link>
        <Link href="/products">
          <Button variant="outline">Products</Button>
        </Link>
        <Link href="/register">
          <Button variant="outline">Register</Button>
        </Link>
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
      </div>
    </nav>
  );
}
