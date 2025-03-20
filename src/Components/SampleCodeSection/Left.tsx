import { CodeData } from "./data";
import { CodeDetailCard } from "./Left/CodeDetailCard";

// interface CodeData {
//     title: string;
//     desc: string;
//     code: string;
//   }

export function Left(){
    return(
    <div className="text-white col-span-5 w-full px-4 py-4">
        {/* Codes Detail */}
        <div className="space-y-2">
            {
                CodeData.map((data)=><CodeDetailCard data={data}/>)
            }
        </div>
    </div>
    )
}