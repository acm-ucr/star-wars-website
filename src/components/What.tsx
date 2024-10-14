import React from "react";

const What = () => {
  return (
    <>
      <div className="w- bg-gradient-to-br from-purple-950 via-black to-purple-900 p-8">
        {" "}
        <div className="text-left">
          <h2 className="mb-2 bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-100 bg-clip-text text-4xl font-bold text-transparent">
            {" "}
            Forge the Future
          </h2>
          <p className="mb-6 w-2/5 rounded-sm font-nunito text-lg text-white">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="mb-6 w-2/5 text-lg text-white">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="mt-2 bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-100 bg-clip-text p-3 text-right text-4xl font-semibold text-transparent">
          WHAT WE DO{" "}
        </div>
      </div>
    </>
  );
};

export default What;
