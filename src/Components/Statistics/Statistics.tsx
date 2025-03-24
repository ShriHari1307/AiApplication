import { StatisticsCard } from "./StatisticsCard";

const data=[1,2,3];

export function Statistics(){
    return (
    <div className='w-full px-8 lg:px-20 xl:px-30 2xl:px-40 '>
        {/* HEADER */}
        <div className="w-full h-24 flex justify-center items-center border-x-1 border-b-1 border-[#292C32]">
            <div className="text-white font-medium opacity-70">
            STATISTICS
            </div>
        </div>

        {/* CARDS */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-x-1 border-[#292C32]">
            {
                data.map((d)=><StatisticsCard/>)
            }
        </div>

    </div>
    )
}