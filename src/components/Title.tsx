import React from "react";

const Title = ({text}:{text:string}) => {
  return (
    <div className="bg-black p-10">
      <div className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text text-5xl font-bold leading-tight text-transparent">
        {text}
      </div>
    </div>
  );
};

export default Title;
