import { AuroraText } from "./Ui";

import hero from "/HeroImg.png";
import arrow from "/arrow.png"
import construction from "/Construction.png"

type Props = {};

export default function HeroSection() {
  return (
    <div className="flex justify-center">
      <div className="pl-6 pr-6 max-w-screen-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-b border-l border-r border-gray-800 p-13 ">
          <div className="flex flex-col justify-start ">
            <a href="#" className="flex gap-3 items-center w-70 h-8 bg-[#2e283e] rounded-full">
              <div className="ml-5 flex gap-2 text-sm">
                <div className="flex gap-1  w-15 bg-[#36393f] rounded-full items-center justify-center">
                <img className="w-4 h-4" src={construction} alt="img" />
                <p className="text-[#b392f0]">New</p>
                </div>
              </div>
              <div className="flex gap-2">
                <p className="text-sm text-[#b392f0] ">Introducing AI Agent SDK </p>
                <div className="flex items-center justify-center">
                  <img className="w-4 h-4" src={arrow} alt="arrow" />
                </div>
              </div>
            </a>
            <div className="pt-8">
              <AuroraText className="text-4xl sm:text-5xl md:text-6xl font-bold">
                AI AGENT SDK
              </AuroraText >
            </div>
            
            <p className="text-white text-md sm:text-lg">
              Create powerful AI agent workflows with just a few lines of code,
              enabling complex task automation and decision-making processes.
            </p>
            <div className="pt-8"> 
            <button className="text-black bg-[#a284da] py-2 px-5 rounded-md font-semibold">{'>_ Get Started'}</button>
            </div>
            <div className="pt-3">
            <p className="text-white text-sm">  Available for all major programming languages</p></div>
          </div>
          <div className="flex items-center justify-center hidden lg:flex">
            <img src={hero} className="w-70 h-70" alt="hero img" />
          </div>
        </div>
      </div>
    </div>
  );
}
