import { AuroraText } from "./Ui";

import hero from "/HeroImg.png";
import arrow from "/arrow.png"


export default function HeroSection() {
  return (
    <section id="heroSection" className="flex justify-center mx-auto container">
      <div className="flex justify-center lg:px-2 max-w-screen-lg">
      <div className="max-w-screen-lg border-b border-[#292c32] border-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 lg:p-12 ">
          <div className="flex flex-col justify-start items-start lg:col-span-1">
            <a href="#" className="flex w-auto items-center space-x-2 rounded-full bg-[#2e283e] px-2 py-1 ring-1 ring-accent whitespace-pre" style={{opacity:"1",willChange:"auto"}}>
              <div className="w-fit text-[#b392f0] rounded-full bg-[#36393f] px-2 py-0.5 text-left text-xs font-medium text-primary sm:text-sm ">
              🛠️ New
              </div>                
              <p className="text-xs font-medium text-[#b392f0] sm:text-sm">Introducing AI Agent SDK</p>
              <div className="flex gap-2">
                <img className="w-4 h-4 text-[#b392f0]" src={arrow} alt="arrow" />
              </div>
            </a>
            <div className="pt-8">
              <AuroraText className="text-4xl sm:text-5xl md:text-6xl font-bold">
                AI AGENT SDK
              </AuroraText >
            </div>
            
            <p className="text-white text-md sm:text-lg" style={{color:"#abafba"}}>
              Create powerful AI agent workflows with just a few lines of code,
              enabling complex task automation and decision-making processes.
            </p>
            <div className="pt-8"> 
            <button className="text-black bg-[#a284da] py-2 px-5 rounded-md font-semibold">{'>_ Get Started'}</button>
            </div>
            <div className="pt-3">
            <p className="text-white text-sm" style={{color:"#abafba"}}>  Available for all major programming languages</p></div>
          </div>
          <div className="flex items-center justify-center hidden lg:flex">
            <img src={hero} className="w-70 h-70 rotating-image" alt="hero img" />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
