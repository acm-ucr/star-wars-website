import React from "react";

const Join = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#000",
        padding: "90px",
        position: "relative",
        background: "linear-gradient(170.23deg, #241d3b 15%, #000000 121%)",
      }}
    >
      {/* Content Section */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 style={{ fontSize: "36px", fontFamily: "Nunito, sans-serif" }}>
          Join
        </h1>

        <div style={{ position: "relative", display: "inline-block" }}>
          {/* Medium Frame */}
          <img
            src="/frame/joinframe1.svg"
            alt="Medium Frame"
            style={{ width: "1569px", height: "588px" }}
          />

          {/* Dark Gradient Overlay for Text - Contained within the small frame */}
          <div
            style={{
              position: "absolute",
              top: "-54px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "588px",
              height: "125px",
              background:
                "linear-gradient(170.23deg, #15121A 15%, #675980 121%)",
              opacity: 1,
              zIndex: 0,
              pointerEvents: "none",
            }}
          ></div>

          {/* Small Frame - Positioned on top of the Medium Frame */}
          <img
            src="/frame/smallframe.svg"
            alt="Small Frame"
            style={{
              width: "670.53px",
              height: "126.8px",
              position: "absolute",
              top: "-55px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
          />

          {/* Star Icon */}
          <img
            src="/frame/star.svg"
            alt="Star"
            style={{
              position: "absolute",
              top: "-65px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "23px",
              height: "26px",
              zIndex: 2,
            }}
          />

          {/* Text inside Small Frame */}
          <div
            style={{
              position: "absolute",
              top: "1%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "48px",
              color: "transparent",
              background:
                "linear-gradient(180deg, #D09742 20.1%, #FFDA7C 53.77%, #6A4D22 93.14%)",
              WebkitBackgroundClip: "text",
              fontFamily: "Nunito, sans-serif",
              zIndex: 2,
            }}
          >
            JOIN THE GALAXY
          </div>

          {/* White Text Block */}
          <div
            style={{
              position: "absolute",
              top: "150px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              fontSize: "20px",
              fontFamily: "Nunito, sans-serif",
              width: "55%",
              lineHeight: "1.6",
              zIndex: 1,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>

        {/* Icons Section */}
        <div
          style={{
            marginTop: "-160px",
            display: "flex",
            justifyContent: "center",
            gap: "90px",
          }}
        >
          {/* Discord Icon */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/frame/discord.svg"
              alt="Discord"
              style={{ width: "50px", height: "50px" }}
            />
            <div
              style={{
                color: "#D0A660",
                marginTop: "8px",
                marginLeft: "-2px",
                fontFamily: "Nunito, sans-serif",
              }}
            >
              Discord
            </div>
          </div>

          {/* Instagram Icon */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/frame/instagram.svg"
              alt="Instagram"
              style={{ width: "50px", height: "50px" }}
            />
            <div
              style={{
                color: "#D0A660",
                marginTop: "8px",
                marginLeft: "-9px",
                fontFamily: "Nunito, sans-serif",
              }}
            >
              Instagram
            </div>
          </div>

          {/* Email Icon */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/frame/email.svg"
              alt="Email"
              style={{ width: "50px", height: "50px" }}
            />
            <div
              style={{
                color: "#D0A660",
                marginTop: "8px",
                marginLeft: "-1px",
                fontFamily: "Nunito, sans-serif",
              }}
            >
              Email
            </div>
          </div>

          {/* Highlander Icon */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/frame/highlander.svg"
              alt="Highlander"
              style={{ width: "50px", height: "50px" }}
            />
            <div
              style={{
                color: "#D0A660",
                marginTop: "8px",
                marginLeft: "-10px",
                fontFamily: "Nunito, sans-serif",
              }}
            >
              Highlander
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
