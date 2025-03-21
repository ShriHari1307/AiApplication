export function Right({ code }: { code: string }) {
    return (
      <div className="text-white col-span-7 p-4 h-[60vh]">
        <div className="h-full overflow-auto p-4 rounded-lg w-full scrollbar border border-[#2C2C3A] shadow-lg">
          {/* Fake Title Bar */}
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
  
          {/* Code Block */}
          <pre className="text-sm whitespace-pre-wrap break-words p-4 font-mono rounded-lg text-gray-300">
            <code className="text-green-400">
              {code}
            </code>
          </pre>
        </div>
      </div>
    );
  }
  