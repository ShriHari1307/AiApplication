import { useState } from 'react'
import { FlickeringGrid } from '../magicui/flickering-grid'

const Pricing = () => {
  const [yearly, setYearly] = useState(true)

  const toggle = () => setYearly(!yearly)

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
    <div className="w-full px-8 lg:px-20 xl:px-30 2xl:px-40">
      {/* HEADER with Flickering Grid Background */}
      <div className="w-full h-24 flex justify-center items-center relative border-[#292C32] border-x-1 border-b-1">
        <div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black'></div>
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        <div className="text-white font-medium opacity-70 z-10">
          PRICING
        </div>
      </div>

      {/* PRICING HERO SECTION */}
      <div className="border-[#292C32] border-x-1 space-y-6 pt-6">
        <div className="px-10 sm:px-20 lg:px-40 xl:px-50 flex flex-col items-center space-y-2 text-white">
          <h1 className="font-bold text-[2.7rem] text-center">Simple pricing for everyone.</h1>
          <p className="text-center opacity-70">Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
        </div>

        {/* YEARLY/MONTHLY TOGGLE */}
        <div className="text-white space-y-8">
            <div className="flex justify-center pl-8">
            <div className="flex gap-4 border-[#292C32] border-1 px-3 py-2 rounded-full">
              <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-2 py-2 ${yearly ? "bg-white/20 text-[#a284da]" : "text-gray-300"}`}
              >
              Yearly <span className="text-green-400">save 25%</span>
              </button>
              <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-2 py-2 ${!yearly ? "bg-white/20 text-[#a284da]" : "text-gray-300"}`}
              >
              Monthly
              </button>
            </div>
            </div>

          {/* Pricing Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-[#292C32]">
            {data.map((plan) => (
              <div key={plan.name} className={`shadow-xl flex flex-col justify-between mt-2 md:mt-2 sm:mt-2 ${plan.popular ? "border border-[#292c32] bg-[#15141d]" : "border border-[#292c32]"}`}>
                <div className="p-4 md:p-4">
                  <div className="flex justify-between w-full items-center mb-2">
                    <h3 className="text-sm md:text-sm font-semibold mb-4">{plan.name}</h3>
                    {plan.popular && (
                      <div className="flex justify-end items-end">
                        <h1 className="text-xs bg-[#a284da] font-medium text-black rounded-xl px-2 py-1">
                          Most Popular
                        </h1>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-start items-start">
                    <p className="lg:text-3xl text-3xl sm:text-3xl md:text-4xl font-bold transition-all duration-300 backdrop-blur-sm">
                      {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                      <span className="font-light text-gray-300 text-xs md:text-lg">{yearly ? "/year" : "/month"}</span>
                    </p>
                    <p className="text-sm md:text-sm text-gray-300 mt-2 mb-4 max-w-sm text-left">{plan.description}</p>
                  </div>

                </div>
                <div className="border-[#292C32] border-b-1 w-full"></div>
                <ul className="space-y-2 h-full pl-4 pt-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className={`w-full py-2 font-medium cursor-pointer ${plan.popular ? "bg-[#a284da] hover:bg-white hover:text-black text-white" : "bg-white/10 hover:bg-white/0 text-white"}`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
