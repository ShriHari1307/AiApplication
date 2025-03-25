

interface statisticsProps{
    population : string
    platform : string
    logo : string
}


const StatisticsCard : React.FC<statisticsProps> = (props) => {
  return (
    <div className=" flex justify-center p-6 border border-gray-700 relative bg-black">
        <div className=" flex justify-center flex-col text-center relative">
            <h1 className="absolute inset-0 from-[#0d0e12] to-transparent-t text-[5rem] font-bold opacity-10 blur-md">{props.population}</h1>
            <h1 className="relative text-[5rem] font-bold tracking-tight 
               bg-gradient-to-t from-slate-800 to-gray-400
               text-transparent bg-clip-text">                    
               {props.population}
                </h1>
            <div className=" flex justify-center items-center mt-2">
                {props.logo && <img src = {props.logo} alt="logo" className="w-6 h-6 text-gray-400"/>}
                <h1 className=" px-2 text-gray-400 text-sm">{props.platform}</h1>
            </div>
        </div>
    </div>
  )
}

export default StatisticsCard