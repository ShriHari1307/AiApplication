import Examples from "./Components/Examples";
import HeroSection from "./Components/HeroSection";
import Organisation from "./Components/Organisation";
import Features from "./Components/Features/features";
import Blog from "./Components/Blog";
import PricingLayout from './Components/Pricing/PricingLayout'
import TestimonialsLayout from "./Components/Testimonials/TestimonialsLayout";

export default function MainContent() {
  return (
  <>
    <HeroSection />
    <Organisation />
    <Examples/>
    <Features/>
    <TestimonialsLayout/>
    <PricingLayout/>
    <Blog/>
  </>
  )
}