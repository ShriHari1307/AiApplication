import { Left } from "./Left";
import { Right } from "./Right";

export function HeroSection(){
    return (
    <div className='flex items-center justify-between h-full px-8 lg:px-20 xl:px-30 2xl:px-40 '>
        <div className="grid grid-cols-12 w-full border-l-1 border-r-1 border-b-1 border-[#292C32]">
            <Left/>
            <Right/>
        </div>
    </div>
    )
}