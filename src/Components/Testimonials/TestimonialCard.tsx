export function TestimonialCard(){
    return(
        <div className="text-white px-6 py-5 space-y-3 border-[#292C32] border-r-1 border-b-1 hover:bg-white/5 cursor-pointer">

            {/* USER */}
            <div className="flex items-center gap-3">
                <div><img className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"/></div>
                <div >
                     <h1 className="font-semibold text-lg">Alice Johnson</h1>
                     <p className="text-[0.9rem] opacity-75">OpenMind Labs</p>
                </div>
            </div>
            
            {/* COMMENT */}
            <div className="">
            The AI Agent SDK has revolutionized how we build intelligent systems. It's incredibly intuitive and powerful.
            </div>
        </div>
    )
}