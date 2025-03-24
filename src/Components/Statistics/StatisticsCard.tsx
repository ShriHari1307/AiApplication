export function StatisticsCard(){
    return(
      <div className="text-white space-y-3 h-44 border-[#292C32] border-r-1 border-b-1 relative cursor-pointer">
        <div className="text-8xl font-bold w-full h-full relative flex justify-center items-center">
        <div className="relative bg-gradient-to-b from-white to-black bg-clip-text text-transparent opacity-45">
          10K+
        </div>
      </div>

        
        <div className="z-10 absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[0.9rem] flex items-center font-medium gap-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg" className="h-5 w-5"/>
        Stars on Github
        </div>
    </div>
    
    )
}