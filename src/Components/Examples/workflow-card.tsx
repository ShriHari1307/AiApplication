"use client"

interface WorkflowCardProps {
  title: string;
  description: string;
  isSelected?: boolean;
  onClick: () => void;
}

export default function WorkflowCard({ title, description, isSelected = false, onClick }: WorkflowCardProps) {
  return (
    <div className={`flex-shrink-0 cursor-pointer transition-all card border border-gray-700 p-2  w-64 md:w-full text-left p-4 mb-2 mr-2 last:mr-0 md:mr-0 rounded
        ${isSelected ? "bg-[#292c32b3] " : "hover:bg-stone-900"}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e)=>(e.key==="Enter"||e.key===" ") && onClick()}
    >
      <h3 className="font-medium tracking-tight text-white">{title}</h3>
      <p className="text-sm" style={{color:"#abafba"}}>{description}</p>
    </div>
  )
}