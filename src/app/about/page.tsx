import React from "react";
import Do from "@/components/about/Do";
import Join from "@/components/Join";
import About from "@/components/about/About";

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <About title="About" />
      <Do />
      <Join />
    </div>
  );
};

export default page;
