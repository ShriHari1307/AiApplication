import { FlickeringGrid } from "../magicui/flickering-grid";
import Card from "./Card";
import IntegrationSkeleton from "./magicui/IntegrationSkeleton";
import MonitorAgentCase from "./magicui/MonitorAgentCase";
import { OrbitingCirclesDemo } from "./OrbitingCirclesDemo";

export function UseCase() {
  const data = [
    {
      component:<IntegrationSkeleton/> ,
      metaData: {
        name: "Tool Integration",
        description: "Seamlessly integrate external APIs and tools into agent workflows.",
      },
    },
    {
      component: <MonitorAgentCase/>,
      metaData: {
        name: "Monitor agent activity",
        description: "Track and analyze your AI agent performance with detailed activity logs.",
      },
    },
    {
      component: 
        <OrbitingCirclesDemo/>,
      metaData: {
        name: "Build once, run anywhere",
        description: "Create AI agents that work seamlessly across different platforms.",
      },
    },
  ];

  return (
    <div className='flex justify-center mx-auto container px-4'>
    {/* Flickering Grid Background */}

    <div className='px-6  md:px-6 sm:px-6 w-full max-w-screen-lg'>
      {/* Header */}
      {/* <div className="bg-black border-1 border-zinc-700 h-[20vh] flex items-center justify-center text-white ">
        <h1 className="opacity-70 font-sans text-lg">USE CASES</h1>
      </div> */}
<div className="relative w-full flex justify-center overflow-hidden border-x-1  border-[#292c32] ">
              {/* Flickering Grid Positioned Across Full Width */}
                        <div className="absolute inset-0 w-full h-full z-[-1] ">
                          <FlickeringGrid 
                            className="w-full h-full"
                            squareSize={4}
                            gridGap={6}
                            color="#6B7280"
                            maxOpacity={0.5}
                            flickerChance={0.1}
                          />
                        </div>

                {/* Heading */}
                      <div className="container mx-auto sm:px-8 md:px-16 lg:px-24 py-12  border-[#292c32]  text-center overflow-hidden">
                        
                        <h2 className="text-gray-400 font-semibold relative z-10">
                          USE CASES
                        </h2>
                      <div className="absolute bottom-0 left-0 w-full h-90 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

                    </div>
            </div>
        
      
      <div className="flex flex-col   lg:flex lg:flex-row   border-t-1 border-r-1  border-[#292c32]  ">
        {data.map((d) => ( 
          <Card  caseData={d} /> // ✅ Added key  map function
        ))}
      </div>
      
    </div>
    </div> 
  );
}
