import { useEffect, useState } from "react";

type Props = {};

const pairedLogos = [
  {
    firstSrc: "Organisations/Google.svg",
    secondSrc: "Organisations/Spotify.svg",
  },
  {
    firstSrc: "Organisations/Microsoft.svg",
    secondSrc: "Organisations/Dropbox.svg",
  },
  {
    firstSrc: "Organisations/Amazon.svg",
    secondSrc: "Organisations/Tinder.svg",
  },
  {
    firstSrc: "Organisations/Netflix.svg",
    secondSrc: "Organisations/Slack.svg",
  },
  {
    firstSrc: "Organisations/YouTube.svg",
    secondSrc: "Organisations/Zoom.svg",
  },
  {
    firstSrc: "Organisations/Instagram.svg",
    secondSrc: "Organisations/Shopify.svg",
  },
];
export default function Organisation({}: Props) {
  const [currentLogos, setCurrentLogos] = useState(
    pairedLogos.map((pair) => pair.firstSrc)
  );

  useEffect(() => {
    console.log(currentLogos);
    const interval = setInterval(() => {
      setCurrentLogos((prevLogos) =>
        prevLogos.map((logo, index) =>
          logo === pairedLogos[index].firstSrc
            ? pairedLogos[index].secondSrc
            : pairedLogos[index].firstSrc
        )
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="organisation">
      <div className="flex justify-center w-full ">
        <div className="max-w-screen-lg">
          <div className="h-full">
            <div className="grid h-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 ">
              {currentLogos.map((src, index) => (
                <div
                  key={index}
                  className={`flex p-4 h-full border-r border-b border-[#292c32] border-t-0 last:border-r-0 items-center justify-center md:[&:nth-child(3n)]:border-r-0 ${(index+1)%2=== 0?"border-r-0":""}  lg:[&:nth-child(3n)]:border-r md:even:border-r`}>
                  <img
                    src={src} loading="lazy"
                    alt="Company Logo"
                    className="h-10 w-100  brightness-100 opacity-50 transition-all duration-200 ease-in-out hover:invert hover:grayscale hover:opacity-100 hover:brightness-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
