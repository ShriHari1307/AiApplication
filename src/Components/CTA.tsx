export default function CTASection() {
    return (
      <section id="cta" className="flex justify-center px-4">
        <div className="max-w-screen-lg w-full pl-6 pr-6">
          <div className="border border-b-0 border-[#292c32] overflow-hidden relative text-center p-4 py-8 md:p-12 mx-auto">
            <p className="max-w-3xl text-white text-foreground mb-6 text-balance mx-auto font-medium text-3xl">
              Ready to build your next AI agent?
            </p>
            <div className="flex justify-center">
            <button className="px-6 py-3 text-[#18181b] bg-[#b392f0] hover:bg-[#a284da] active:bg-[#a284da] focus:ring-4 focus:ring-[#a284da] font-medium rounded-lg text-sm transition duration-300 ease-in-out flex items-center gap-2 shadow-md">
  Get Started
</button>

            </div>
          </div>
        </div>
      </section>
    );
  }
  