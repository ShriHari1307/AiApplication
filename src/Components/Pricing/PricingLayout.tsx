import { useToggle } from '../Hooks/useToggle'
import { PricingCard } from './PricingCard'
import { PricingToggle } from './PricingToggle'

const PricingLayout = () => {

    const [yearly, toggle] = useToggle(true)


    const data = [
        {
            name: "Basic",
            yearlyPrice: "$99",
            monthlyPrice:"$9",
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
            monthlyPrice:"$29",
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
            monthlyPrice:"$999",
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
        <div className="flex flex-col items-center justify-center text-center text-white pt-6 w-full">
            <h1 className="text-4xl md:text-4xl font-bold mb-4">Simple pricing for everyone.</h1>
            <p className="text-md md:text-sm text-gray-400 max-w-md">
                Choose an <span className="font-semibold text-white">affordable plan</span> that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
            </p>
            <div className=' flex items-center py-5'>
                <PricingToggle yearly={yearly} toggle = {toggle}/>
            </div>
            <div className="flex flex-row w-full">
                {data.map((plan) => (
                    <PricingCard key={plan.name} plan={plan} yearly={yearly} />
                ))}
            </div>
        </div>
    )
}

export default PricingLayout