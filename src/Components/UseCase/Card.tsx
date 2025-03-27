import { ReactNode } from "react";

interface MyData {
  component: ReactNode;
  metaData: {
    name: String;  // ✅ Changed String to string
    description: String;  // ✅ Changed String to string
  };
}

interface CardProps {
  caseData: MyData;
}

function Card({ caseData }: CardProps) {
  return (
    <div className=" border-[#292c32] flex flex-col ">
      {/* Component Content */}
      <div className="flex items-center justify-center min-h-[50vh] border-l-1 border-[#292c32] text-white ">
        {caseData.component}
      </div>
     

      {/* MetaData Content */}
      <div className=" border-l-1 border-b-1 border-t-1 border-[#292c32] flex flex-col text-white font-semibold items-start justify-start p-3">
        <h1 className="m-1 text-xl">{caseData.metaData.name}</h1>
        <h1 className="opacity-70 text-sm px-1">{caseData.metaData.description}</h1>
      </div>
   
    </div>
  );
}

export default Card;
