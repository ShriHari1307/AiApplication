
import bolt from "/bolt.png";
import code from "/code.png";
import web from "/language.png";
import power from "/power.png";
import brain from "/neurology.png";
import group from "/group.png";
import { FlickeringGrid } from "../magicui/flickering-grid";


interface FeatureCardProps {
    icon: string
    title: string
    description: string
  }


  const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
      <div className="flex flex-col items-center text-center p-8">
        <img className="bg-purple-400 bg-opacity-30 p-3 rounded-lg mb-4  w-[50px] h-[50px] object-contain" src={icon} alt={title} width={50} height={50} />
        

        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
          Learn more &gt;
        </a>
      </div>
    )
}

  export default function FeaturesSection() {
    const features = [
      {
        icon: brain,
        title: "Simple Agent Workflows",
        description: "Easily create and manage AI agent workflows with intuitive APIs.",
      },
      {
        icon: group,
        title: "Multi-Agent Systems",
        description: "Build complex systems with multiple AI agents working together.",
      },
      {
        icon: power,
        title: "Tool Integration",
        description: "Seamlessly integrate external tools and APIs into your agent workflows.",
      },
      {
        icon: web,
        title: "Cross-Language Support",
        description: "Available in all major programming languages for maximum flexibility.",
      },
      {
        icon: code,
        title: "Customizable Agents",
        description: "Design and customize agents to fit your specific use case and requirements.",
      },
      {
        icon: bolt,
        title: "Efficient Execution",
        description: "Optimize agent performance with built-in efficiency and scalability features.",
      },
    ]
  


  return (
    <div className="text-white align-middle">
        
        <div className="border border-gray-800 mx-[1rem] ">
          {/* Full-width Flickering Grid with Centered Heading */}
            <div className="relative w-full flex justify-center">
              {/* Flickering Grid Positioned Across Full Width */}
                        <div className="absolute inset-0 w-full h-full z-[-1]">
                          <FlickeringGrid 
                            className="w-full h-full"
                            squareSize={4}
                            gridGap={6}
                            color="#6B7280"
                            maxOpacity={0.5}
                            flickerChance={0.1}
                          />
                        </div>

                {/* Centered Container for the Heading */}
                      <div className="container mx-auto sm:px-8 md:px-16 lg:px-24 py-12 border-gray-800 text-center">
                        
                        <h2 className="text-gray-400 font-semibold relative z-10">
                          FEATURES
                        </h2>
                      <div className="absolute bottom-0 left-0 w-full h-90 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

                    </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-800 lg:mx-[1rem] ">
            {features.map((feature, index) => (
            <div key={index} className="border-r border-b border-gray-800  hover:bg-gray-950 flex flex-col items-center">
                <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </div>
            ))}
        </div>
    </div> 

  );
};



// {/* Flickering Grid Background */}
{/* <div className="absolute inset-0 z-0">
<FlickeringGrid
  className="size-full"
  squareSize={4}
  gridGap={6}
  color="#6B7280"
  maxOpacity={0.5}
  flickerChance={0.1}
/>
{/* Fade effect at the bottom */}
{/* <div className="absolute bottom-0 left-0 w-full h-90 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
</div> */} 

{/*<div className="border border-gray-800 mx-[1rem] ">
          Full-width Flickering Grid with Centered Heading 
          <div className="relative w-full ">
          {/* Flickering Grid Positioned Across Full Width 
                    <div className="absolute inset-0 w-full h-full z-[-1]">
                      <FlickeringGrid 
                        className="w-full h-full"
                        squareSize={4}
                        gridGap={6}
                        color="#6B7280"
                        maxOpacity={0.5}
                        flickerChance={0.1}
                      />
                    </div>

            {/* Centered Container for the Heading 
                  <div className="container mx-auto sm:px-8 md:px-16 lg:px-24 py-12 border-gray-800 text-center">
                    
                    <h2 className="text-gray-400 font-semibold relative z-10">
                      FEATURES
                    </h2>
                  <div className="absolute bottom-0 left-0 w-full h-90 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

                </div>
        </div>
    </div>*/}



