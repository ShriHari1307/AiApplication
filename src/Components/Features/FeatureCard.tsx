export function FeatureCard(){
    return(
        <div className="text-white flex flex-col items-center px-12 py-6 space-y-3 border-[#292C32] border-r-1 border-b-1 hover:bg-white/5 cursor-pointer">
            <div className="h-10 w-10 bg-[#ad8de8] flex justify-center items-center rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-brain h-6 w-6"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
            </div>
            <div>
              <h1 className="text-[1.1rem] font-medium">Simple Agent Workflows</h1>
            </div>
            <div className="text-center">
              <p className="text-[0.9rem] opacity-80">Easily create and manage AI agent workflows with intuitive APIs.</p>
            </div>
            <div>
               <button className="text-[#ad8de8] font-medium hover:underline hover:text-white cursor-pointer">{`Learn more>`}</button>
            </div>
        </div>
    )
}