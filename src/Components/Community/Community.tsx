import React from "react";
import { Avatar } from "./Subcomponents/Avatar";
import { FlickeringGrid } from "../magicui/flickering-grid";

const avatarData: string[] = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
];

export const Community: React.FC = () => {
  return (
    <div className="flex items-center justify-between h-full px-8 lg:px-20 xl:px-30 2xl:px-40">
      <div className="w-full">
        {/* Header */}
        <div className="w-full h-24 flex justify-center items-center relative border-[#292C32] border-b-1 border-x-1">
                <div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black'></div>
                <FlickeringGrid
                  className="absolute inset-0 z-0"
                  squareSize={4}
                  gridGap={6}
                  color="#6B7280"
                  maxOpacity={0.5}
                  flickerChance={0.1}
                />
                <div className="text-white font-medium opacity-70 z-10">
                  COMMUNITY
                </div>
              </div>

        {/* Body */}
        <div className="px-[21rem] py-16 border-[#292C32] border-x-1  font-medium text-sm text-white flex flex-col items-center space-y-8">
          <h1 className="text-center opacity-75">
            We're grateful for the amazing open-source community that helps make our project better every day.
          </h1>

          {/* Avatar Group */}
          <div className="flex justify-center items-center">
            {avatarData.map((src, index) => (
              <Avatar key={index} src={src} index={index} />
            ))}
          </div>

          <button className="bg-[#323539] px-5 py-3 rounded-md">
            Become a contributor
          </button>
        </div>
      </div>
    </div>
  );
};
