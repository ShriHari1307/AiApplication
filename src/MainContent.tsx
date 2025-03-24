import Examples from "./Components/Examples";
import HeroSection from "./Components/HeroSection";
import Organisation from "./Components/Organisation";

export default function MainContent() {
  return (
  <div className="xl:mx-[16rem] mx-[1.5rem] border-x border-[#292c32]">
    <HeroSection />
    <Organisation />
    <Examples/>
  </div>
  )
}