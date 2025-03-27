import Examples from "./Components/Examples";
import HeroSection from "./Components/HeroSection";
import Organisation from "./Components/Organisation";
import Features from "./Components/Features/features";
import Blog from "./Components/Blog";
import Community from "./Components/Community";
//import HeaderComponent from './Components/Header'
import CTASection from "./Components/CTA";
import Footer from "./Components/Footer";
import PricingLayout from './Components/Pricing/PricingLayout'
import StatisticsLayout from "./Components/Statistics/StatisticsLayout";
import TestimonialsLayout from "./Components/Testimonials/TestimonialsLayout";

export default function MainContent() {
  return (
  <div className="px-6">
    <HeroSection />
    <Organisation />
    <Examples/>
    <Features/>
    <StatisticsLayout/>
    <TestimonialsLayout/>
    <PricingLayout/>
    <Community/>
    <Blog/>
    <CTASection />
    <Footer />
  </div>
  )
}