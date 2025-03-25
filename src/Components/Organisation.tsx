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
      <div className="flex justify-center w-full px-[1rem] max-w-screen-lg mx-auto ">
        <div className="max-w-screen-lg border-[#292c32] border-l">
          <div className="h-full">
            <div className="grid h-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 ">
              {currentLogos.map((src, index) => (
                <div
                  key={index}
                  className="flex p-4 h-full border-r border-b border-[#292c32] items-center justify-center">
                  <img
                    src={src} loading="lazy"
                    alt="Company Logo"
                    className="h-10 w-100 grayscale brightness-60 contrast-25 opacity-50 hover:invert hover:opacity-100 duration-200 ease-out transition-all"
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
