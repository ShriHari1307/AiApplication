import Blog from "./Components/Blog";
import CTASection from "./Components/CTA";
import Footer from "./Components/Footer";
import HeaderComponent from './Components/Header'
import PricingLayout from './Components/Pricing/PricingLayout'

export default function MainContent() {
  return (
  <div className="">
    <HeaderComponent/>
    <PricingLayout/>
    <Blog/>
    <CTASection />
    <Footer />
  </div>
  )
}