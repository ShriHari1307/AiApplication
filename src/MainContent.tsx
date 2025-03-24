import HeroSection from "./Components/HeroSection";
import Organisation from "./Components/Organisation";

export default function MainContent() {
  return (
    <>
      <div className="border-x border-[#292c32] xl:mx-[16rem] mx-[1.5rem]">
        <HeroSection/>
        <Organisation/>
      </div>  
    </>
  )
}