import {
    RiCircleLine,
    RiShareCircleLine,
    RiImageCircleLine,
    RiRecordCircleLine,
    RiImageCircleAiFill,
    RiCheckboxCircleLine
} from "@remixicon/react";

export default function Trusted() {
    return (
        <section className="my-25 flex flex-col gap-10">
            <div className="flex justify-between mx-50 items-center">
                <h3 className="text-xl font-bold tracking-tighter">Trusted by</h3>
                <p className="text-neutral-500">Join 1,000 companies already building their websites with Frameblox.</p>
            </div>
            <div className="grid grid-cols-4 gap-3 mx-45 tracking-tighter">
                <div className="flex items-center justify-center gap-2 text-neutral-600 bg-neutral-100 opacity-80 rounded-lg px-1 py-7">
                    <RiCircleLine size={35} />
                    <h2 className="text-2xl font-extrabold">Frame Blox</h2>
                </div>
                <div className="flex items-center justify-center gap-2 text-neutral-600 bg-neutral-100 opacity-80 rounded-lg px-1 py-7">
                    <RiShareCircleLine size={35} />
                    <h2 className="text-2xl font-extrabold">Supa Blox</h2>
                </div>
                <div className="flex items-center justify-center gap-2 text-neutral-600 bg-neutral-100 opacity-80 rounded-lg px-1 py-7">
                    <RiImageCircleLine size={35} />
                    <h2 className="text-2xl font-extrabold">Hype Blox</h2>
                </div>
                <div className="flex items-center justify-center gap-2 text-neutral-600 bg-neutral-100 opacity-80 rounded-lg px-1 py-7">
                    <RiRecordCircleLine size={35} />
                    <h2 className="text-2xl font-extrabold">Ultra Blox</h2>
                </div>
                <div className="flex items-center justify-center gap-2 text-neutral-600 bg-neutral-100 opacity-80 rounded-lg px-1 py-7">
                    <RiImageCircleAiFill size={35} />
                    <h2 className="text-2xl font-extrabold">Ship Blox</h2>
                </div>
                <div className="flex items-center justify-center gap-2 text-neutral-600 bg-neutral-100 opacity-80 rounded-lg px-1 py-7">
                    <RiRecordCircleLine size={35} />
                    <h2 className="text-2xl font-extrabold">Frame Blox</h2>
                </div>
                <div className="flex items-center justify-center gap-2 text-neutral-600 bg-neutral-100 opacity-80 rounded-lg px-1 py-7">
                    <RiCheckboxCircleLine size={35} />
                    <h2 className="text-2xl font-extrabold">Ultra Blox</h2>
                </div>
                <div className="flex items-center justify-center gap-2 text-neutral-600 bg-neutral-100 opacity-80 rounded-lg px-1 py-7">
                    <RiImageCircleAiFill size={35} />
                    <h2 className="text-2xl font-extrabold">Ship Blox</h2>
                </div>git 
            </div>
        </section>
    )
}
