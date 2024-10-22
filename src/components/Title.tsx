import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <div className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-bold leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
      {text}
    </div>
  );
};

export default Title;
