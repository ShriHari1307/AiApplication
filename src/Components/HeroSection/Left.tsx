export function Left(){
    return(
    <div className="text-white col-span-12 lg:col-span-6 px-10 py-4">
        {/* Introduction */}
        <div className="flex pt-6 pb-3">
            <div className="bg-purple-400/30 text-purple-300 px-3 py-1.5 flex gap-5 text-sm rounded-full cursor-pointer">
            <p>New</p>
            <p>Introducing AI Agent</p>
            </div>
        </div>

        {/* Logo */}
        <div className="pt-4">
            <h1 className="font-bold text-5xl py-2 bg-gradient-to-r from-red-500 via-5% to-green-500 bg-clip-text text-transparent">AI Agent SDK</h1>
            <p className="font-normal opacity-70 text-[1.1rem]">Create powerful AI agent workflows with just a few lines of code, enabling complex task automation and decision-making processes.</p>
        </div>

        {/* Get Staetd */}
        <div className="py-6">
          <button className='bg-purple-400 py-2 px-4 rounded-md text-[#0D0E12] font-medium text-[1rem]'>{'>_ Get Started'}</button>
          <p className="text-sm opacity-60 py-4">Available for all major programming languages</p>
        </div>
        
    </div>
    )
}