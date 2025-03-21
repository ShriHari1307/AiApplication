import { useState, useEffect } from "react";
import { ClientData } from "./data";

export function ClientSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % ClientData.length);
        setFade(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentImages = ClientData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="flex items-center justify-between h-full px-8 lg:px-20 xl:px-30 2xl:px-40">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 border-r border-[#292C32]">
        {currentImages.map((data, index) => (
          <ClientCard key={index} image={data.clientImage} fade={fade} />
        ))}
      </div>
    </div>
  );
}

interface ClientProps {
  image: string;
  fade: boolean;
}

export function ClientCard({ image, fade }: ClientProps) {
  return (
    <div className="col-span px-8 py-4 h-24 border-l border-b border-[#292C32] flex justify-center items-center">
      <img
        className={`dark:brightness-0 dark:invert grayscale hover:grayscale-0 
        hover:brightness-100 dark:hover:brightness-0 dark:hover:invert object-contain h-full w-full transition-opacity duration-500 ease-in-out cursor-pointer
        ${fade ? "opacity-40" : "opacity-0"} hover:opacity-100`}
        src={image}
        alt="Client Logo"
      />
    </div>
  );
}