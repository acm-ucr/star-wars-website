import Cosplay from "@/components/cosplays/Cosplay";
import Gallery from "@/components/gallery/Gallery";
import Creation from "@/components/gallery/Creation";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <Gallery title="GALLERY" />
      <Cosplay />
      <Creation />
    </div>
  );
};

export default page;
