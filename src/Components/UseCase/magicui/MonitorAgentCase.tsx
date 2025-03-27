import { useState } from "react";

interface LogItem {
  id: number;
  timestamp: string;
  type: string;
  message: string;
}

const MonitorAgentCase = () => {
  const logs: LogItem[] = [
    {
      id: 1,
      timestamp: "2023-12-15 14:23:45",
      type: "INFO",
      message: "Agent initialized. Starting task execution."
    },
    {
      id: 2,
      timestamp: "2023-12-15 14:23:47",
      type: "ACTION",
      message: "Retrieving data from external API..."
    },
    {
      id: 3,
      timestamp: "2023-12-15 14:23:50",
      type: "DECISION",
      message: "Analyzing data. Confidence: 85%"
    },
    {
      id: 4,
      timestamp: "2023-12-15 14:23:52",
      type: "WARNING",
      message: "Potential anomaly detected in dataset."
    }
  ];

  const [hovered, setHovered] = useState(false);
  const itemHeight = 80; // px height per log entry

  return (
    <div 
      className="w-full max-w-md  h-60  overflow-hidden p-3  "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className={`transition-transform duration-500 ease-in-out ${hovered?'opacity-70':''}` }
        style={{
          transform: hovered ? `translateY(-${itemHeight}px)` : 'translateY(0)',
          height: `${logs.length * itemHeight}px`
        }}
      >
        {logs.map((log) => (
          <div 
            key={log.id} 
            className=" p-3  flex items-start"
          >
            <div className="lg:py-2 lg:px-1 px-0 py-0  flex items-center   border-1 border-gray-800 w-full">
              <div className={`w-6 h-6  rounded-md mr-3 flex items-center justify-center text-xs font-bold ${
                log.type === 'INFO' ? 'bg-blue-500' :
                log.type === 'ACTION' ? 'bg-green-500' :
                log.type === 'DECISION' ? 'bg-purple-500' :
                'bg-yellow-500'
              }`}>
                {log.type.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-200">
                  [{log.timestamp}] {log.type}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {log.message}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitorAgentCase;