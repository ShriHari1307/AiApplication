import { useState } from "react";

const AnimatedList = () => {
  const items = [
    { id: 1, text: "[2023-12-15 14:23:45] INFO", desc: "Agent initialized. Starting task execution.", color: "blue" },
    { id: 2, text: "[2023-12-15 14:23:47] ACTION", desc: "Retrieving data from external API...", color: "green" },
    { id: 3, text: "[2023-12-15 14:23:50] DECISION", desc: "Analyzing data. Confidence: 85%", color: "purple" },
    { id: 4, text: "[2023-12-15 14:23:52] WARNING", desc: "Potential anomaly detected in dataset.", color: "yellow" },
  ];

  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="relative w-[400px] h-[200px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`transition-transform duration-500 ease-in-out ${hovered ? "-translate-y-[33%]" : ""}`}
      >
        {items.map((item) => (
          <div 
            key={item.id} 
            className="flex items-center gap-3 bg-gray-800 p-4 mb-2 rounded-lg shadow-lg"
          >
            <div className={`w-8 h-8 flex justify-center items-center rounded-full bg-${item.color}-500 text-white font-bold`}>
              {item.text[1]}
            </div>
            <div>
              <h3 className="font-bold">{item.text}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedList;
