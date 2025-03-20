import { useState, useRef } from "react";
import menu from "../assets/Menu.png";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [startY, setStartY] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  // Handle touch move (dragging)
  const handleTouchMove = (e: React.TouchEvent) => {
    const currentY = e.touches[0].clientY;
    const offset = currentY - startY;
    if (offset > 0) setDragOffset(offset); // Track downward movement
  };

  // Handle touch end (release)
  const handleTouchEnd = () => {
    if (dragOffset > 100) {
      setIsDrawerOpen(false); // Close drawer if dragged down enough
    }
    setDragOffset(0);
  };

  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 z-10 h-14 border-b border-gray-700 backdrop-filter backdrop-blur-lg">
        <div className="flex justify-between items-center max-w-screen-lg mx-auto p-2">
          <h3 className="text-white text-lg font-semibold mb-1">{">_ AI Agent SDK"}</h3>
          <button formTarget="#" className="hidden lg:block mb-1 bg-purple-400 py-1 px-3 rounded-sm text-black">
            Get Started
          </button>
          <button className="block lg:hidden mb-1" onClick={() => setIsDrawerOpen(true)}>
            <img className="w-6 h-6" src={menu} alt="menu" />
          </button>
        </div>
      </div>

      {/* Overlay (Click to Close) */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}

      //Bottom Drawer with Drag-to-Close 
      <div
        ref={drawerRef}
        className={`fixed bottom-0 left-0 w-full bg-gray-900 text-white rounded-t-2xl p-6 shadow-lg z-50 transition-transform duration-300 ${
          isDrawerOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ transform: `translateY(${dragOffset}px)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Drag Handle */}
        <div className="w-40 h-1.5 bg-[#30323b] rounded-full mx-auto mb-3"></div>

        

        {/* Drawer Content */}
        <h3 className="text-lg font-semibold mb-2">{">_ AI Agent SDK"}</h3>
        <p className="text-gray-300 mb-4">
          Create AI Agents with just a few lines of code.
        </p>

        {/* Get Started Button */}
        <button className="w-full bg-purple-500 py-2 rounded-lg text-white">
          Get Started
        </button>
      </div>
    </>
  );
}
