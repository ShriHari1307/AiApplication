
import bolt from "/features/bolt.png";
import code from "/features/code.png";
import web from "/features/language.png";
import power from "/features/power.png";
import brain from "/features/neurology.png";
import group from "/features/group.png";
import { FlickeringGrid } from "../magicui/flickering-grid";


interface FeatureCardProps {
    icon: string
    title: string
    description: string
  }


  const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
      <div className="flex flex-col gap-y-2 items-center text-center">
        <img className="bg-[#a284da] bg-opacity-30 p-3 rounded-lg  w-[45px] h-[45px] object-contain" src={icon} alt={title}  />
        <h3 className="text-xl text-balance font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-balance text-sm mx-auto max-w-md text-center">{description}</p>
        <a href="#" className="text-[#a284da] hover:text-white hover:underline transition-colors ">
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
    <section id="features" className=" flex justify-center mx-auto container ">
    <div className="text-white lg:px-2 max-w-screen-lg mx-auto">
        <div className="border-x  border-[#292c32]">
          {/* Full-width Flickering Grid with Centered Heading */}
            <div className="relative w-full flex justify-center overflow-hidden">
              {/* Flickering Grid Positioned Across Full Width */}
                        <div className="absolute inset-0 z-[0] ">
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
                      <div className="container mx-auto sm:px-8 md:px-16 lg:px-24 py-12 border-[#292c32]  text-center overflow-hidden">
                        
                        <h2 className="relative text-sm text-muted-foreground font-semibold tracking-tight uppercase">
                          FEATURES
                        </h2>
                      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent pointer-events-none" />

                    </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center border-t border-l border-[#292c32]">
            {features.map((feature, index) => (
            <div key={index} className="flex flex-col  border-r border-b border-[#292c32] px-4 py-8 hover:bg-[#17181bb3] items-center">
                <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </div>
            ))}
        </div>
    </div> 
    </section>
  );
};




