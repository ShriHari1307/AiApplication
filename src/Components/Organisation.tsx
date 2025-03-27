import { useEffect, useState } from "react";

type Props = {};

const pairedLogos = [
    { firstSrc: "https://cdn.magicui.design/companies/Google.svg", secondSrc: "https://cdn.magicui.design/companies/Spotify.svg" },
    { firstSrc: "https://cdn.magicui.design/companies/Microsoft.svg", secondSrc: "https://cdn.magicui.design/companies/Dropbox.svg" },
    { firstSrc: "https://cdn.magicui.design/companies/Amazon.svg", secondSrc: "https://cdn.magicui.design/companies/Tinder.svg" },
    { firstSrc: "https://cdn.magicui.design/companies/Netflix.svg", secondSrc: "https://cdn.magicui.design/companies/Slack.svg" },
    { firstSrc: "https://cdn.magicui.design/companies/YouTube.svg", secondSrc: "https://cdn.magicui.design/companies/Zoom.svg" },
    { firstSrc: "https://cdn.magicui.design/companies/Instagram.svg", secondSrc: "https://cdn.magicui.design/companies/Shopify.svg" },
  ];
export default function Organisation({}: Props) {
    const [currentLogos, setCurrentLogos] = useState(pairedLogos.map((pair) => pair.firstSrc));
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentLogos((prevLogos) =>
          prevLogos.map((logo, index) =>
            logo === pairedLogos[index].firstSrc ? pairedLogos[index].secondSrc : pairedLogos[index].firstSrc
          )
        );
      }, 2000); 
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="flex justify-center w-full h-16">
      <div className="pl-6 pr-6 max-w-screen-lg">
        <div className="h-full">
           <div className="grid h-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 ">
           {currentLogos.map((src, index) => (
        <div key={index} className="flex p-5 h-full border border-gray-800 items-center justify-center">
          <img
            src={src}
            alt="Company Logo"
            className="h-10 w-100 dark:brightness-0 dark:invert grayscale opacity-30 
                       hover:grayscale-0 hover:opacity-100 transition-all duration-200 ease-out"
          />
        </div>
      ))}
            </div>
         </div>
      </div>
    </div>
  );
}
