import { Button } from "./Button"
import { PricingFeature } from "./PricingFeature"

interface PricingPlan {
    plan: {
        name: string
        yearlyPrice: string
        monthlyPrice: string
        description: string
        features: string[]
        popular?: boolean
    }
    yearly : boolean
}


export const PricingCard: React.FC<PricingPlan> = ({ plan, yearly }) => (
    <div className={`shadow-xl flex flex-col justify-between mt-2 md:mt-2 sm:mt-2  ${plan.popular ? "border border-[#292c32] bg-[#15141d]" : "border border-[#292c32]"
        }`}>
        <div className="p-4 md:p-4">
            <div className=" flex justify-between w-full items-center mb-2">
                <h3 className="text-sm md:text-sm font-semibold mb-4">{plan.name}</h3>
                {plan.popular && (
                    <div className="flex justify-end items-end">
                        <h1 className="text-xs bg-purple-600 text-black rounded-xl px-2 py-1">
                            Most Popular
                        </h1>
                    </div>
                )}
            </div>
            <div className=" flex flex-col justify-start items-start">
            <p className="lg:text-3xl text-3xl sm:text-3xl md:text-4xl font-bold transition-all duration-300 backdrop-blur-sm">
                    {yearly ? plan.yearlyPrice : plan.monthlyPrice}{""}
                    <span className="font-light text-gray-300 text-xs md:text-lg">{yearly ? "/year" : "/month"}</span>
                </p>
                <p className="text-sm md:text-sm text-gray-300 mt-2 mb-4 max-w-sm text-left">{plan.description}</p>
            </div>
        </div>
        <div className="border-b w-full"></div>
        <ul className="space-y-2 h-full pl-4 pt-2">
            {plan.features.map((feature, idx) => (
                <PricingFeature key={idx} title={feature} />
            ))}
        </ul>
        <div className="mt-6">
            <Button label="Get Started" highlight={plan.popular} />
        </div>
    </div >
)

