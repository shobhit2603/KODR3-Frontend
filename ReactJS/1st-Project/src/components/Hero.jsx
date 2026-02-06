import { RiArrowRightLongLine } from "@remixicon/react";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center gap-6 p-22 text-center relative">
            <h3 className="instrument text-3xl z-5">Your Day, in Perfect Rhythm.</h3>
            <h1 className="text-7xl font-bold tracking-tighter z-5">Work Smarter,<br />Not Harder</h1>
            <p className="text-xl text-neutral-500 z-5">Take control of your time with our all-in-one productivity app. Organize tasks,<br />track progress, and focus on what matters—without the overwhelm.</p>
            <button className="flex items-center justify-center gap-2 border border-neutral-700 rounded-full px-8 py-5 text-sm font-medium uppercase cursor-pointer hover:bg-black hover:text-white transition-all duration-300 z-5">Try it for free <RiArrowRightLongLine size={15} /></button>
            <img src="/iPhone.webp" alt="iPhone in Hand" className="h-180 w-180 -rotate-6 z-5" />
            <div
                className="absolute inset-0 top-130 bg-[linear-gradient(rgb(252,221,66)_27.027%,rgb(255,0,119)_50%,rgb(158,0,161)_100%)] blur-[100px] rotate-[-7deg] opacity-100 h-100">
            </div>

            <div className="pointer-events-none absolute bottom-13 left-0 w-full h-100 bg-linear-to-t from-white to-transparent z-10" />

        </section>
    )
}
