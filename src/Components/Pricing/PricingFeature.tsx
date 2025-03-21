interface FeatureItemProps {
    title: string;
}


export const PricingFeature: React.FC<FeatureItemProps> = ({ title }) => (

    <div>
        <ul><li className="flex space-x-2">
            <span className=" text-green-500 text-xl">✓</span>
            <span>{title}</span>
        </li></ul>

    </div>
)