import { RiBookletLine } from "@remixicon/react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-3 border-b-2 border-neutral-300">
      <div className="flex items-center gap-3">
        <button className="cursor-pointer">
          <RiBookletLine />
        </button>
        <h1 className="text-xl">My Notes</h1>
      </div>
      <ul className="flex gap-5">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <button className="bg-black text-white px-4 py-1 rounded-lg cursor-pointer">
        Login
      </button>
    </nav>
  );
}
