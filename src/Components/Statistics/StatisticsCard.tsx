interface statisticsProps {
    population: string
    platform: string
    logo: React.ReactNode
}


const StatisticsCard: React.FC<statisticsProps> = (props) => {
    return (
        <div className=" group flex justify-center p-6 border border-gray-700 relative
        transition-all duration-300 ease-in-out hover:border-gray-500">

            <div className="absolute top-4 right-4 opacity-0 translate-x-2 -translate-y-2 transition-all duration-300 ease-in-out 
            group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l10-10m0 0H7m10 0v10" />
                </svg>
            </div>

            <div className=" flex justify-center flex-col text-center relative">
                <h1 className="absolute inset-0 from-[#0d0e12] to-transparent-t text-[5rem] font-bold opacity-10 blur-md">{props.population}</h1>
                <h1 className="relative text-[5rem] font-bold tracking-tight 
               bg-gradient-to-t from-slate-800 to-gray-600
               text-transparent bg-clip-text filter brightness-150">
                    {props.population}
                </h1>
                <div className=" flex justify-center items-center mt-2">
                    {props.logo && <span className="w-6 h-6 text-gray-400">{props.logo}</span>}
                    <h1 className=" px-2 text-gray-400 text-sm">{props.platform}</h1>
                </div>
            </div>

        </div>
    )
}

export default StatisticsCard;