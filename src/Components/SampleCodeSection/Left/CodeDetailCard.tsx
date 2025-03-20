interface CodeData {
    title: string;
    desc: string;
    code: string;
  }
  
interface CodeDetailCardProps {
  data: CodeData;
}
  
  export function CodeDetailCard({ data }: CodeDetailCardProps) {
    return (
      <div className="border border-[#292C32] px-4 py-5 rounded-md cursor-pointer hover:bg-slate-700/50">
        <h1 className="font-medium text-[1rem]">{data.title}</h1>
        <p className="text-sm opacity-70 font-normal">{data.desc}</p>
      </div>
    );
  }