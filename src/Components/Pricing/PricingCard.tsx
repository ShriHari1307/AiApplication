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
    <div className={`shadow-xl flex flex-col justify-between ${plan.popular ? "border border-gray-700 bg-gray-900" : "border border-gray-700 bg-gray-900"
        }`}>
        <div className="p-4">
            <div className=" flex justify-between w-full items-center mb-2">
                <h3 className="text-sm font-semibold mb-1">{plan.name}</h3>
                {plan.popular && (
                    <div className="w-25 flex justify-end items-end">
                        <h1 className="text-xs bg-purple-600 text-black rounded-xl px-2 py-1 w-full">
                            Most Popular
                        </h1>
                    </div>
                )}
            </div>
            <div className=" flex flex-col justify-start items-start">
            <p className="text-xl font-bold">
                    {yearly ? plan.yearlyPrice : plan.monthlyPrice}{" "}
                    <span className="font-light text-xs">{yearly ? "/year" : "/month"}</span>
                </p>
                <p className="text-sm md:text-sm text-gray-400 mt-2 mb-4 max-w-sm text-left">{plan.description}</p>
            </div>
        </div>
        <div className="border-b w-full"></div>
        <ul className="space-y-2 h-full">
            {plan.features.map((feature, idx) => (
                <PricingFeature key={idx} title={feature} />
            ))}
        </ul>
        <div className="mt-6">
            <Button label="Get Started" highlight={plan.popular} />
        </div>
    </div >
)

