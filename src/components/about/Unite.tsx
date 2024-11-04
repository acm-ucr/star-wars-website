import React from "react";

const Unite = () => {
  return (
    <div className="w-full h-screen bg-purple-900 flex items-center justify-center px-10 text-white">
      {/* Left section for OUR MISSION */}
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="border border-yellow-500 px-6 py-3 rounded-md">
          <h2 className="text-lg font-bold text-yellow-500 tracking-wide">OUR MISSION</h2>
        </div>
      </div>
      {/* Right section for Title and Mission Statement */}
      <div className="ml-16 max-w-lg">
        <h1 className="text-6xl font-bold text-yellow-400 mb-4">Unite the Galaxy</h1>
        <p className="text-gray-300 leading-relaxed">
          <strong className="text-white">Mission Statement HERE.</strong> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    </div>
  );
};

export default Unite;
