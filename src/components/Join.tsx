import React from "react";

const Join = () => {
  return (
    <div className="relative bg-black bg-gradient-to-b from-[#241d3b] to-black py-[90px] text-center">
      {/* Content Section */}
      <div className="relative z-10">
        <h1 className="font-nunito text-[36px]">Join</h1>

        <div className="relative inline-block">
          {/* Medium Frame */}
          <img
            src="/frame/joinframe1.svg"
            alt="Medium Frame"
            className="h-[588px] w-[1569px]"
          />

          {/* Dark Gradient Overlay for Text - Contained within the small frame */}
          <div className="pointer-events-none absolute left-1/2 top-[-54px] z-0 h-[125px] w-[588px] -translate-x-1/2 transform bg-gradient-to-b from-[#15121A] to-[#675980] opacity-100"></div>

          {/* Small Frame - Positioned on top of the Medium Frame */}
          <img
            src="/frame/smallframe.svg"
            alt="Small Frame"
            className="absolute left-1/2 top-[-55px] z-10 h-[126.8px] w-[670.53px] -translate-x-1/2 transform"
          />

          {/* Star Icon */}
          <img
            src="/frame/star.svg"
            alt="Star"
            className="absolute left-1/2 top-[-65px] z-20 h-[26px] w-[23px] -translate-x-1/2 transform"
          />

          {/* Text inside Small Frame */}
          <div className="absolute left-1/2 top-[1%] z-20 -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-b from-[#D09742] via-[#FFDA7C] to-[#6A4D22] bg-clip-text font-nunito text-[48px] text-transparent">
            JOIN THE GALAXY
          </div>

          {/* White Text Block */}
          <div className="absolute left-1/2 top-[150px] z-10 w-[55%] -translate-x-1/2 transform font-nunito text-[20px] leading-[1.6] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>

        {/* Icons Section */}
        <div className="mt-[-160px] flex justify-center gap-[90px]">
          {/* Discord Icon */}
          <div className="text-center">
            <img
              src="/frame/discord.svg"
              alt="Discord"
              className="h-[50px] w-[50px]"
            />
            <div className="-ml-[2px] mt-[8px] font-nunito text-[#D0A660]">
              Discord
            </div>
          </div>

          {/* Instagram Icon */}
          <div className="text-center">
            <img
              src="/frame/instagram.svg"
              alt="Instagram"
              className="h-[50px] w-[50px]"
            />
            <div className="-ml-[9px] mt-[8px] font-nunito text-[#D0A660]">
              Instagram
            </div>
          </div>

          {/* Email Icon */}
          <div className="text-center">
            <img
              src="/frame/email.svg"
              alt="Email"
              className="h-[50px] w-[50px]"
            />
            <div className="-ml-[1px] mt-[8px] font-nunito text-[#D0A660]">
              Email
            </div>
          </div>

          {/* Highlander Icon */}
          <div className="text-center">
            <img
              src="/frame/highlander.svg"
              alt="Highlander"
              className="h-[50px] w-[50px]"
            />
            <div className="-ml-[10px] mt-[8px] font-nunito text-[#D0A660]">
              Highlander
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
