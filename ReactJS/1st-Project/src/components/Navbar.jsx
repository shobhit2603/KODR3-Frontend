import { RiArrowRightLongLine } from "@remixicon/react";

export default function Navbar() {
    return (
        <nav className="flex justify-between px-40 py-5 items-center">
            <h1 className="text-lg font-bold">Enblox</h1>
            <ul className="flex gap-5 text-sm items-center">
                <li>Home</li>
                <li>Services</li>
                <li>Features</li>
                <li>Blog</li>
                <li>Pricing</li>
            </ul>
            <button className="flex items-center justify-center gap-2 border border-neutral-700 rounded-full px-5 py-3 text-xs font-medium uppercase cursor-pointer hover:bg-black hover:text-white transition-all duration-300">Try it for free <RiArrowRightLongLine size={15} /></button>
        </nav>
    )
}
