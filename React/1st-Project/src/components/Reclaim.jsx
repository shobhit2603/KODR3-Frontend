import { RiArrowRightLongLine } from "@remixicon/react";

export default function Reclaim() {
    return (
        <section className="min-h-screen relative">
            <img src="/Reclaim.webp" alt="Reclaim Image" className="w-full h-230 object-cover" />

            <div className="absolute bottom-40 text-white flex gap-70 items-center justify-center w-full px-40">
                <div>
                    <h3 className="instrument text-3xl">No stress. Just flow.</h3>
                    <h1 className="text-7xl font-bold tracking-tighter leading-tight">Ready to Reclaim<br />Your Time?</h1>
                </div>
                <div className="flex flex-col gap-2 items-end">
                    <p>Start organizing, priortizing, and crushing your goals<br />today.</p>
                    <button className="flex items-center justify-center gap-2 border border-neutral-100 rounded-full px-8 py-5 text-sm font-medium uppercase cursor-pointer hover:bg-white hover:text-black transition-all duration-300 z-5 w-fit">Try it for free <RiArrowRightLongLine size={15} /></button>
                </div>
            </div>

            <div class="bg-linear-to-l from-[#FCDD42] via-[#FF0077] to-[#9E00A1] blur-[100px] opacity-100 h-30 -mt-10 w-full"></div>
        </section>
    )
}
