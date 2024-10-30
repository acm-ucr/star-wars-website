import React from "react";

const Unite = () => {
  return (
    <div className="w-full bg-black text-2xl text-white">
      {/* <!-- Left section for Moon, Rocket, and OUR MISSION --> */}
      <div className="left-section">
        <div className="mission-box">
          <h2 className="mission-text">OUR MISSION</h2>
        </div>
      </div>

      <div className="right-section">
        <h1 className="title-text">Unite the Galaxy</h1>
        <p>
          <strong>Mission Statement HERE.</strong> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Unite;
