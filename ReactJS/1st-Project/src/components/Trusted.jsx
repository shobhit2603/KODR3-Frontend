import {
    RiCircleLine,
    RiShareCircleLine,
    RiImageCircleLine,
    RiRecordCircleLine,
    RiImageCircleAiFill,
    RiCheckboxCircleLine
} from "@remixicon/react";
import CompanyCard from "./ui/CompanyCard";

export default function Trusted() {
    const companies = [
        { icon: RiCircleLine, name: "Frame Blox" },
        { icon: RiShareCircleLine, name: "Supa Blox" },
        { icon: RiImageCircleLine, name: "Hype Blox" },
        { icon: RiRecordCircleLine, name: "Ultra Blox" },
        { icon: RiImageCircleAiFill, name: "Ship Blox" },
        { icon: RiRecordCircleLine, name: "Frame Blox" },
        { icon: RiCheckboxCircleLine, name: "Ultra Blox" },
        { icon: RiImageCircleAiFill, name: "Ship Blox" },
    ];

    return (
        <section className="py-25 flex flex-col gap-10">
            <div className="flex justify-between mx-50 items-center">
                <h3 className="text-xl font-bold tracking-tighter">Trusted by</h3>
                <p className="text-neutral-500">Join 1,000 companies already building their websites with Frameblox.</p>
            </div>
            <div className="grid grid-cols-4 gap-3 mx-45 tracking-tighter">
                {companies.map((company, index) => (
                    <CompanyCard
                        key={index}
                        Icon={company.icon}
                        name={company.name}
                    />
                ))}
            </div>
        </section>
    )
}
