import React from "react";

const Unite = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-purple-900 px-10 text-white">
      {/* Left section for OUR MISSION */}
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="rounded-md border border-yellow-500 px-6 py-3">
          <h2 className="text-lg font-bold tracking-wide text-yellow-500">
            OUR MISSION
          </h2>
        </div>
      </div>
      {/* Right section for Title and Mission Statement */}
      <div className="ml-16 max-w-lg">
        <h1 className="mb-4 text-6xl font-bold text-yellow-400">
          Unite the Galaxy
        </h1>
        <p className="leading-relaxed text-gray-300">
          <strong className="text-white">Mission Statement HERE.</strong> Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Unite;
