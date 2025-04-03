import { FlickeringGrid } from "./magicui/flickering-grid"; // Import same effect as blog

export default function CTASection() {
  return (
    <section id="cta" className="relative flex justify-center mx-auto container text-white">
      <div className="max-w-screen-lg lg:px-2 w-full">
        
        {/* CTA Box */}
        <div className="relative text-center border border-[#292c32] overflow-hidden p-4 py-8 md:p-12 mx-auto">
          
          {/* Flickering Grid Background */}
          <div className="absolute inset-0 z-0">
            <FlickeringGrid
              className="size-full"
              squareSize={4}
              gridGap={6}
              color="#6B7280"
              maxOpacity={0.5}
              flickerChance={0.1}
            />
            {/* Fade effect at bottom for consistency */}
            <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* CTA Content */}
          <p className="relative z-10 max-w-3xl text-white text-foreground mb-6 mx-auto font-medium text-2xl md:text-3xl">
            Ready to build your next AI agent?
          </p>

          {/* CTA Button */}
          <div className="flex justify-center relative z-10">
            <button className="px-6 py-3 text-[#18181b] bg-[#b392f0] hover:bg-[#a284da] active:bg-[#a284da] focus:ring-4 focus:ring-[#a284da] font-medium rounded-lg text-sm md:text-base transition duration-300 ease-in-out flex items-center gap-2 shadow-md">
              Get Started
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
