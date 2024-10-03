import React from "react";
import Button from "./Button";


const Landing = () => {

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">

      <div className="flex justify-center items-center w-32 h-32 bg-sw-gold-100">
block 1
      </div>
      <div className="w-32 h-32 bg-sw-gold-100">
        block 2
      </div>



      <Button title={"This is a title"} link={"/about"} />
    </div>
  );
};

export default Landing;


