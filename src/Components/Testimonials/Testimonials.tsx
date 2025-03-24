import { TestimonialCard } from "./TestimonialCard";

const data=[1,2,3,4,5,6,7];

export function Testimonials(){
    return (
        <div className="flex items-center justify-between h-full px-8 lg:px-20 xl:px-30 2xl:px-40 ">
                
        <div className='border-[#292C32] border-b-1 border-l-1 border-r-1'>
            {/* HEADER */}
            <div className="w-full h-24 flex justify-center items-center border-x-1 border-b-1 border-[#292C32]">
                <div className="text-white font-medium opacity-70">
                TESTIMONIALS
                </div>
            </div>

            {/* CARDS */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-[#292C32]">
                {
                    data.map((d)=><TestimonialCard/>)
                }
            </div>

            {/* See More */}
            <div className="w-full flex justify-center py-5">
                <button className="border-[#292C32] rounded-sm border-1 text-white font-medium px-3 py-1.5 cursor-pointer hover:bg-white/20">See more</button>
            </div>

        </div>
        
        </div>
    )
}