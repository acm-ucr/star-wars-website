import Gallery from "@/components/gallery/Gallery";
import Creation from "@/components/gallery/Creation";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-5">
      <Gallery title="GALLERY" />
      <Creation />
    </div>
  );
};

export default page;
