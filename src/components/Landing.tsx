import React from "react";
import Button from "./Button";

const Landing = () => {
  return (
    <div className="flex flex-col">
      Landing
      <Button title={"This is a title"} link={"/about"} />
    </div>
  );
};

export default Landing;
