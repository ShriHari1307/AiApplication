import { FlickeringGrid } from '../magicui/flickering-grid'
import StatisticsCard from './StatisticsCard'
import { FaGithub, FaDiscord } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";

const StatisticsLayout = () => {

    const data = [
        {
            population: "10K+",
            platform: "Stars on GitHub",
            logo: <FaGithub  className='w-5 h-5 mt-0.5 ml-1 text-[#f8fafc]'/>
        },
        {
            population: "50K+",
            platform: "Discord Members",
            logo: <FaDiscord className='w-5 h-5 mt-0.5 ml-1 text-[#f8fafc]'/>
        },
        {
            population: "1M+",
            platform: "Downloads",
            logo: <PiDownloadSimpleBold className='w-5 h-5 mt-0.5 ml-1 text-[#f8fafc]'/>
        }
    ]

    return (
        <div className=' flex justify-center mx-auto container'>
            <div className='lg:px-2 w-full max-w-screen-lg'>
                <div className="text-center relative mx-auto border border-[#292c32] overflow-hidden p-4 py-8 md:p-12">

                    {/* Flickering Grid Background */}
                    <div className="absolute inset-0 z-0">
                        <FlickeringGrid
                            className="size-full"
                            squareSize={4}
                            gridGap={6}
                            color="#6B7280"
                            maxOpacity={0.5}
                            flickerChance={0.1}
                        />
                        {/* Fade effect at the bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Blog Title (Now above flickering grid) */}
                    <h2 className="relative text-sm text-white text-muted-foreground font-semibold tracking-tight uppercase">
                        STATISTICS
                    </h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
                    {data.map((plan) => (
                        <StatisticsCard key={plan.population} {...plan} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StatisticsLayout