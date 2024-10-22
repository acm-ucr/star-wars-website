import React from "react";
import Title from "./Title";
import Header from "./Header";

const What = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="w-s flex flex-col gap-y-4 pl-[8%] pt-[9%] text-right">
          <div className="mr-[8%] flex w-auto flex-col gap-9">
            <Title text="Forge The Future" />

            <p className="md:text:xl font-white sm:text-lg lg:text-2xl">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="md:text:xl font-white sm:text-lg lg:text-2xl">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
        <div className="mx-10 flex w-full items-end justify-start">
          <Header title="What We Do" />
        </div>
      </div>
    </>
  );
};

export default What;
