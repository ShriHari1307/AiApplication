const points=["100 AI generations per month","Basic text-to-image conversion","Email support","Access to community forum"];

export function PricingCard(){
    return(
      <div className="text-white cursor-pointer">
        
        {/* PRICE */}
        <div className="p-4 border-[#292C32] border-t-1 border-r-1 border-b-1">
           <p className="opacity-65">Basic</p>
           <div className="py-2"><span className="font-semibold text-4xl">$99</span>/ year</div>
           <p className="opacity-65">Perfect for individuals and small projects.</p>
        </div>
        
        {/* DETAILS */}
        <div className="p-4 border-[#292C32] border-r-1 border-b-1">
          <ul className="space-y-1">
            {
              points.map((data)=><li><span className="text-green-600">&#10004;</span>{data}</li>)
            }
          </ul>
        </div>

        {/* GET STARTED */}
        <div className="text-center font-medium text-sm border-[#292C32] border-r-1 bg-white/10 hover:bg-black/5 py-3 cursor-pointer">
          Get Started
        </div>
    </div>
    
    )
}