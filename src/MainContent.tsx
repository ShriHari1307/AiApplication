import Examples from "./Components/Examples";
import HeroSection from "./Components/HeroSection";
import Organisation from "./Components/Organisation";
import Features from "./Components/Features/features";
export default function MainContent() {
  return (
  <>
    <HeroSection />
    <Organisation />
    <Examples/>
    <Features/>
  </>
  )
}