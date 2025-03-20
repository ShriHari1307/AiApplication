interface FeatureItemProps {
    title: string;
  }


export const PricingFeature : React.FC <FeatureItemProps> = ({ title }) => (

    <div>
        <li className="flex px-3 space-x-2">
            <span className=" text-green-500 text-xl">✓</span>
            <span>{title}</span>
        </li>
    </div>
)