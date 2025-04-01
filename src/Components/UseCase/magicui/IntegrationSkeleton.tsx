import { useState } from 'react';

const IntegrationSkeletonCard = () => {
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(true);

  const tools = [
    {
      id: 1,
      title: "Google Search API integration",
     
      icon: "🔍"
    },
    {
      id: 2,
      title: "PostgreSQL database connection",
     
      icon: "🗄️"
    },
    {
      id: 3,
      title: "OpenAI GPT-3.5 API integration",
      
      icon: "🤖"
    }
  ];

  return (
    <div 
      className="w-70 h-[30vh] relative rounded    p-3"
      onMouseEnter={() => {
        setHovered(true);
        setTimeout(() => setLoading(false), 300); // Simulate loading delay
      }}
      onMouseLeave={() => {
        setHovered(false);
        setLoading(true);
      }}
    >
      {/* First Card */}
      <div className={`absolute w-full transition-all duration-300 ${hovered ? 'translate-y-0' : 'translate-y-0'}`}>
        <div className="flex items-start gap-3">
          <div className="text-xl mt-1">{tools[0].icon}</div>
          <div className="flex-1">
            {loading ? (
              <>
                
                <div className="h-4 bg-gray-700 rounded w-4/5 mb-2 animate-pulse"></div>
                <div className=" text-xs sm:text-sm text-gray-200 opacity-70">{tools[0].title}</div>
              </>
            ) : (
              <>
                
                <div className="h-4 bg-gray-700 rounded w-4/5 mb-2 animate-pulse"></div>
                <div className=" text-xs sm:text-sm text-gray-200 opacity-70">{tools[0].title}</div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className={`absolute w-full transition-all duration-300 ${hovered ? 'translate-y-12' : 'translate-y-10'}`}>
        <div className="flex items-start gap-3">
          <div className="text-xl mt-1">{tools[1].icon}</div>
          <div className="flex-1">
            {loading ? (
              <>
                <div className="h-4 bg-gray-700 rounded w-4/5 mb-2 animate-pulse"></div>
                <div className="text-xs sm:text-sm text-gray-200 opacity-70">{tools[1].title}</div>
              </>
            ) : (
              <>
                <div className="h-4 bg-gray-700 rounded w-4/5 mb-2 animate-pulse"></div>
                <div className="text-xs sm:text-sm text-gray-200 opacity-70">{tools[1].title}</div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Third Card (appears on hover) */}
      {hovered && (
        <div className="absolute w-full translate-y-24 transition-all  duration-300">
          <div className="flex items-start gap-3">
            <div className="text-xl mt-1">{tools[2].icon}</div>
            <div className="flex-1">
            <div className="h-4 bg-gray-700 rounded w-4/5 mb-2 animate-pulse"></div>
            <div className="text-xs sm:text-sm text-gray-200 opacity-70">{tools[2].title}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntegrationSkeletonCard;