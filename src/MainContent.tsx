import Blog from "./Components/Blog";
import HeaderComponent from './Components/Header'
import PricingLayout from './Components/Pricing/PricingLayout'
import StatisticsLayout from "./Components/Statistics/StatisticsLayout";
import TestimonialsLayout from "./Components/Testimonials/TestimonialsLayout";

export default function MainContent() {
  return (
  <div className="">
    <HeaderComponent/>
    <StatisticsLayout/>
    <TestimonialsLayout/>
    <PricingLayout/>
    <Blog/>
  </div>
  )
}