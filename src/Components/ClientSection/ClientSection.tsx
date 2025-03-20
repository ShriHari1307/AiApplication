import { ClientCard } from "./ClientCard";
import { ClientData } from "./data";


export function ClientSection(){
    return (
    <div className='flex items-center justify-between h-full px-8 lg:px-50 xl:px-60 2xl:px-70'>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  border-r-1 border-[#292C32]">
           {
            ClientData.map((data)=><ClientCard image={data.clientImage}/>)
           }
        </div>
    </div>
    )
}