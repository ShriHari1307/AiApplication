import Blog from "./Components/Blog";
import HeaderComponent from './Components/Header'
import PricingLayout from './Components/Pricing/PricingLayout'

export default function MainContent() {
  return (
  <div className="">
    <HeaderComponent/>
    <PricingLayout/>
    <Blog/>
  </div>
  )
}