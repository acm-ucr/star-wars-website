import React from "react";
import Title from "../Title";

const Unite = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-10 text-white md:flex-row md:gap-0">
      <div className="flex w-2/3 flex-col items-center justify-center space-y-6">
        <div className="rounded-md border border-yellow-500 px-6 py-3">
          <h2 className="text-lg font-bold tracking-wide text-yellow-500">
            OUR MISSION
          </h2>
        </div>
      </div>
      <div className="mr-[8%] flex w-full flex-col gap-9 text-left">
        <Title text="Enter Our Galaxy" />
        <p className="md:text:xl text-white sm:text-lg lg:text-3xl">
          <span className="md:text:xl text-white sm:text-lg lg:text-2xl">
            The Star Wars Club at UCR unites fans of all backgrounds to
            celebrate the Star Wars universe. Through events, creativity, and
            discussions, we connect enthusiasts and inspire imagination while
            embracing the timeless themes of hope, courage, and unity. We aim to
            create a welcoming space to share adventures, build memories, and
            forge friendships. Together, we bring the magic of a galaxy far, far
            away to life. May the Force be with us!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Unite;
