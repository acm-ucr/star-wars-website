import Cosplay from "@/components/cosplays/Cosplay";
import Gallery from "@/components/gallery/Gallery";
import React from "react";

const page = () => {
  return (
    <div>
      <Gallery />
      <Cosplay name="NAME" character="CHARACTER" />
    </div>
  );
};

export default page;
