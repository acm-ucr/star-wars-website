import React from "react";
import Button from "./Button";

const Landing = () => {
  return (
    <div className="grid grid-cols-3">
      Landing
      <Button title={"This is a title"} link={"/about"} />
      <Button title={"This is a title"} link={"/about"} />
      <Button title={"This is a title"} link={"/about"} />
      <Button title={"This is a title"} link={"/about"} />
    </div>
  );
};

export default Landing;
