import { useToggle } from '../Hooks/useToggle'
import { FlickeringGrid } from '../magicui/flickering-grid'
import { PricingCard } from './PricingCard'
import { PricingToggle } from './PricingToggle'

const PricingLayout = () => {

    const [yearly, toggle] = useToggle(true)


    const data = [
        {
            name: "Basic",
            yearlyPrice: "$99",
            monthlyPrice: "$9",
            description: "Perfect for individuals and small projects.",
            features: [
                "100 AI generations per month",
                "Basic text-to-image conversion",
                "Email support",
                "Access to community forum",
            ],
        },
        {
            name: "Pro",
            yearlyPrice: "$290",
            monthlyPrice: "$29",
            description: "Ideal for professionals and growing businesses.",
            features: [
                "1000 AI generations per month",
                "Advanced text-to-image conversion",
                "Priority email support",
                "API access",
                "Custom AI model fine-tuning",
                "Collaboration tools",
            ],
        },
        {
            name: "Enterprise",
            yearlyPrice: "Custom",
            monthlyPrice: "$999",
            description: "Tailored solutions for large organizations.",
            popular: true,
            features: [
                "Unlimited AI generations",
                "Dedicated account manager",
                "24/7 phone and email support",
                "Custom AI model development",
                "On-premises deployment option",
                "Advanced analytics and reporting",
            ],
        },
    ]


    return (
        <div className='flex justify-center mx-auto container px-4'>
            {/* Flickering Grid Background */}

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
                        PRICING
                    </h2>
                </div>
                <div className="flex flex-col items-center justify-center text-center text-white pt-6 border border-gray-600">
                    <h1 className="text-3xl lg:text-5xl md:text-5xl sm:text-4xl font-bold mb-4 md:w-md">Simple pricing for everyone.</h1>
                    <p className="text-sm lg:text-lg md:w-xl md:text-md sm:text-lg text-gray-400">
                        Choose an <span className="font-semibold text-white">affordable plan</span> that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
                    </p>
                    <div className=' flex items-center pt-10 '>
                        <PricingToggle yearly={yearly} toggle={toggle} />
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 w-full">
                        {data.map((plan) => (
                            <PricingCard key={plan.name} plan={plan} yearly={yearly} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingLayout