import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import { FaXTwitter } from "react-icons/fa6"; // Import X (Twitter) icon

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center gap-y-5 rounded-lg px-7 text-white py-5 container">
      {/* Logo & Social Icons */}
      <div className="flex items-center justify-between px-6 sm:px-12 md:px-16 lg:px-28 xl:px-32">
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18" // Reduced from 24 to 18
            height="18" // Reduced from 24 to 18
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
          <h2 className="text-sm font-bold text-foreground">AI Agent SDK</h2> {/* Reduced text size */}
        </div>

        {/* Social Media Links */}
        <div className="flex gap-x-4">
          {/* GitHub Icon */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ABAFBA] hover:text-[#F8FAFC] transition-colors duration-300"
          >
            <FaGithub className="h-5 w-5" /> {/* Reduced icon size */}
          </a>

          {/* X (Twitter) Icon */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ABAFBA] hover:text-[#F8FAFC] transition-colors duration-300"
          >
            <FaXTwitter className="h-5 w-5" /> {/* Reduced icon size */}
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-y-5 sm:px-12 md:px-16 lg:px-28 xl:px-32">
        <ul className="flex flex-col text-[#ABAFBA]  md:flex-row gap-x-5 gap-y-2 text-muted-foreground">
          <li className="text hover:text-[#F8FAFC] font-medium hover:text-foreground hover:underline">
            <a href="#">Pricing</a>
          </li>
          <li className="text-[15px] hover:text-[#F8FAFC] font-medium hover:text-foreground hover:underline">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="text-[#ABAFBA] text-sm font-medium text-muted-foreground">
          <p>All rights reserved.</p>
        </div>
      </div>

      {/* Branding Text */}
      {/* <div className=" absolute bg-gradient-to-t h-60 from-[#0d0e12] to-transparent bottom-0 left-0 pointer-events-none" /> */}
      <div className="relative flex justify-center items-center">
  {/* Background Gradient Overlay */}
  <div className="absolute bottom-0 left-0 w-full h-30  bg-gradient-to-t from-[#0d0e12] to-transparent pointer-events-none"></div>

  {/* Gradient Text with Ripple Effect */}
  <h1 className="font-sans font-semibold font-black text-[15vw] md:text-[12vw] lg:text-[10vw] tracking-tight text-transparent bg-gradient-to-b from-gray-800 to-gray-900 bg-clip-text shadow-md">
    AGENT SDK
  </h1>
</div>

    </footer>
  );
};

export default Footer;
