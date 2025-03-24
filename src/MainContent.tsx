import Blog from "./Components/Blog";
import HeaderComponent from './Components/Header'
import PricingLayout from './Components/Pricing/PricingLayout'
import TestimonialsLayout from "./Components/Testimonials/TestimonialsLayout";

export default function MainContent() {
  return (
  <div className="">
    <HeaderComponent/>
    <TestimonialsLayout/>
    <PricingLayout/>
    <Blog/>
  </div>
  )
}