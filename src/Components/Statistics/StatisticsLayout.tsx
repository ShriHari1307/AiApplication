import { FlickeringGrid } from '../magicui/flickering-grid'
import StatisticsCard from './StatisticsCard'

const StatisticsLayout = () => {

    const data = [
        {
            population: "10K+",
            platform: "Stars on GitHub",
            logo: "https://img.icons8.com/ios-glyphs/30/1A1A1A/github.png"
        },
        {
            population: "50K+",
            platform: "Discord Members",
            logo: "https://img.icons8.com/ios-glyphs/30/1A1A1A/discord-logo.png"
        },
        {
            population: "1M+",
            platform: "Downloads",
            logo: ""
        }
    ]

    return (
        <div className=' flex justify-center mx-auto container px-4'>
            <div className='px-6 md:px-6 sm:px-6 w-full max-w-screen-lg'>
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
                    <h2 className="relative z-10 text-sm text-white text-muted-foreground font-semibold tracking-tight uppercase">
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