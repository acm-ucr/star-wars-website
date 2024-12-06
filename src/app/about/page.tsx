import Unite from "@/components/about/Unite";
import React from "react";
import Do from "@/components/about/Do";
import Join from "@/components/Join";
import About from "@/components/about/About";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <About title="About" />
      <Unite />
      <Do />
      <Join />
    </div>
  );
};

export default page;
