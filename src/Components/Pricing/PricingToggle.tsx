interface PricingToggleProps {
    yearly : boolean;
    toggle: () => void;
}



export const PricingToggle: React.FC<PricingToggleProps> = ({ yearly, toggle }) => (

    <div className="flex items-center justify-center mb-8">
    <div className="flex items-center justify-between w-60 h-10 border rounded-full p-1 bg-gray-800">
        <button
            onClick={() => yearly || toggle()}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
                yearly ? "bg-gray-400 text-white" : "text-gray-300"
            }`}
        >
            Yearly <span className="text-green-400">save 25%</span>
        </button>
        <button
            onClick={() => !yearly || toggle()}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
                !yearly ? "bg-gray-400 text-white" : "text-gray-300"
            }`}
        >
            Monthly
        </button>
    </div>
</div>
)
