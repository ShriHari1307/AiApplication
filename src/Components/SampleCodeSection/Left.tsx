import { useState } from "react";
import { CodeData } from "./data";
import { CodeDetailCard } from "./CodeDetailCard";

interface LeftProps {
  onSelectCode: (code: string) => void;
}

export function Left({ onSelectCode }: LeftProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Ensure state updates

  return (
    <div className="text-white col-span-12 sm:col-span-5 sm:border-r border-[#292C32] px-4 py-4">
      <div className="space-y-2">
        {CodeData.map((data, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectCode(data.code);
            }}
            className="cursor-pointer"
          >
            <CodeDetailCard data={data} isSelected={selectedIndex === index} />
          </div>
        ))}
      </div>
    </div>
  );
}
