export function Footer(){
    return (
        <div className="h-full px-8 lg:px-20 xl:px-30 2xl:px-40 ">
                
        {/* MAIN FOOTER*/}
        <div className='text-white w-full flex justify-between py-4'>
            <div className="flex flex-col space-y-4">
                <span className="font-semibold text-xl">{`>_ AI Agent SDK`}</span>
                <span className="font-medium opacity-70 space-x-5 text-sm">
                     <span>Pricing</span>
                     <span>Contact</span>
                </span>
            </div>

            <div className="flex flex-col space-y-4">
                <span className="flex justify-end">
                   <img className="h-6 w-6" src="git.png"/>
                </span>
                <span className="font-medium opacity-70 text-sm">All rights reserved.</span>
            </div>
        </div>
        
        {/* END FOOTER */}
        <div>
        <div className="text-9xl font-bold flex justify-center py-8 bg-gradient-to-b from-[#242424] via-[#292929] to-black bg-clip-text text-transparent">
            AGENT SDK
        </div>

        </div>
        </div>
    )
}