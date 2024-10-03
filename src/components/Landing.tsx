import React from "react";
import Button from "./Button";

const Landing = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <div className="flex h-32 w-32 items-center justify-center bg-sw-gold-100">
        block 1
      </div>
      <div className="h-32 w-32 bg-sw-gold-100">block 2</div>

      <Button title={"This is a title"} link={"/about"} />
    </div>
  );
};

export default Landing;
