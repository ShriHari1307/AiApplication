import { useState } from "react";
import { Left } from "./Left";
import { Right } from "./Right";
import { CodeData } from "./data";

export function CodeSampleSection() {
  const [selectedCode, setSelectedCode] = useState(CodeData[0].code);

  return (
    <div className="flex items-center justify-between h-full px-8 lg:px-50 xl:px-60 2xl:px-70">
      <div className="grid lg:grid-cols-12 w-full border-l border-r border-b border-[#292C32]">
        <Left onSelectCode={setSelectedCode} />
        <Right code={selectedCode} />
      </div>
    </div>
  );
}
