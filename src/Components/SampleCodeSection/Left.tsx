import { useState } from "react";
import { CodeData } from "./data";
import { CodeDetailCard } from "./Left/CodeDetailCard";

interface LeftProps {
  onSelectCode: (code: string) => void;
}

export function Left({ onSelectCode }: LeftProps) {
    const [selectedIndex, setSelectedIndex] = useState(0); // Track selected card

  return (
    <div className="text-white col-span-5 border-r border-[#292C32] w-full px-4 py-4 h-full">
      {/* Code Details */}
      <div className="space-y-2">
        {CodeData.map((data, index) => (
          <div key={index} onClick={() => onSelectCode(data.code)} className="cursor-pointer">
            <CodeDetailCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
}
