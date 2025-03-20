import { ClientCard } from "./ClientCard";
import { ClientData } from "./data";


export function ClientSection(){
    return (
    <div className='flex items-center justify-between px-50 2xl:px-70 '>
        <div className="grid grid-cols-6 border-r-1 border-[#292C32]">
           {
            ClientData.map((data)=><ClientCard image={data.clientImage}/>)
           }
        </div>
    </div>
    )
}