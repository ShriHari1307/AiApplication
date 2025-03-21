interface PricingToggleProps {
    yearly: boolean;
    toggle: () => void;
}



export const PricingToggle: React.FC<PricingToggleProps> = ({ yearly, toggle }) => (

    <div className="flex items-center justify-center mb-8">
        <div className="flex items-center justify-between w-55 md:w-50 sm:w-50 h-10 border border-gray-700 rounded-full px-1 bg-black">
            <button
                onClick={() => yearly || toggle()}
                className={`px-3 py-2 rounded-full text-xs font-medium ${yearly ? "bg-gray-700 text-purple-400" : "text-gray-300"
                    }`}
            >
                Yearly <span className="text-green-400">save 25%</span>
            </button>
            <button
                onClick={() => !yearly || toggle()}
                className={`px-4 py-2 rounded-full text-xs font-medium ${!yearly ? "bg-gray-700 text-purple-400" : "text-gray-300"
                    }`}
            >
                Monthly
            </button>
        </div>
    </div>
)

