import { useState } from "react";
import { TestimonialCard } from "./TestimonialCard";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export function Testimonials() {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="flex items-center justify-between h-full px-8 lg:px-20 xl:px-30 2xl:px-40">
            <div className="border-[#292C32] border-b-1 border-l-1 border-r-1">
                
                {/* HEADER */}
                <div className="w-full h-24 flex justify-center items-center border-x-1 border-b-1 border-[#292C32]">
                    <div className="text-white font-medium opacity-70">
                        TESTIMONIALS
                    </div>
                </div>

                {/* CARDS */}
                <div className="relative w-full">
    {/* CARDS */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-[#292C32] relative">
        {data.slice(0, showAll ? data.length : 9).map((d) => (
            <TestimonialCard key={d} />
        ))}

        {/* Black Gradient Overlay from Bottom to Top */}
        {!showAll && (
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        )}
    </div>

    {/* Button with z-index to stay above the gradient */}
    <div className="w-full flex justify-center py-5 relative z-10">
        <button
            className="border-[#292C32] rounded-sm border-1 text-white font-medium px-3 py-1.5 cursor-pointer hover:bg-white/20"
            onClick={() => setShowAll(!showAll)}
        >
            {showAll ? "Show Less" : "See More"}
        </button>
    </div>
</div>


            </div>
        </div>
    );
}
