import { IoCheckmarkOutline } from "react-icons/io5";
interface FeatureItemProps {
    title: string;
}


export const PricingFeature: React.FC<FeatureItemProps> = ({ title }) => (

    <div>
        <ul><li className="flex space-x-2 ">
            <span className="text-xl"><IoCheckmarkOutline className="text-[#22c55e]"/></span>
            <span>{title}</span>
        </li></ul>

    </div>
)