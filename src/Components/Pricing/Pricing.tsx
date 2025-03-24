import { PricingCard } from "./PricingCard";

const data=[1,2,3];

export function Pricin(){
    return (
    <div className='w-full px-8 lg:px-20 xl:px-30 2xl:px-40 '>
        {/* HEADER */}
        <div className="w-full h-24 flex justify-center items-center border-x-1 border-b-1 border-[#292C32]">
            <div className="text-white font-medium opacity-70">
            PRICING
            </div>
        </div>

        {/* PRICING HERO SECTION */}
        <div className=" border-[#292C32] border-x-1 ">
            <div className="px-60 flex flex-col items-center space-y-2 text-white">
                <h1 className="font-bold text-[2.7rem]">Simple pricing for everyone.</h1>
                <p className="text-center opacity-70">Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
            </div>
            {/* YEARLY/MONTHLY */}
            <div className="text-white space-y-8">
                <div className="flex justify-center">
                    <div className="flex gap-4 border-[#292C32] border-1 px-3 py-2 rounded-full">
                        <button className="rounded-full bg-white/20 text-[#ad8de8] px-4 py-1">Yearly</button>
                        <button>Monthly</button>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-[#292C32]">
                    {
                        data.map((d)=><PricingCard/>)
                    }
                </div>
            </div>
        </div>

    </div>
    )
}