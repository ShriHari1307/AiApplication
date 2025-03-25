import React from "react";

interface AvatarProps {
  src: string;
  index: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, index }) => {
  return (
    <div
      className="w-16 h-16 rounded-full border-2 border-black overflow-hidden"
      style={{
        marginLeft: index === 0 ? "0px" : "-20px", // Overlapping effect
      }}
    >
      <img className="w-full h-full object-cover" src={src} alt="user-avatar" />
    </div>
  );
};
