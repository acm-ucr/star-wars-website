import React from "react";
import Button from "./Button";

const Landing = () => {
  return (
    <div>
      Landing
      <Button title={"JOIN"} link={"/about"} />
      <Button title={"LEARN MORE"} link={"/about"} />
    </div>
  );
};

export default Landing;
