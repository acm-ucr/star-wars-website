import Link from "next/link";
import Image from "next/image";
import Home from "@/public/frame/404homeframe.svg";

const NotFound = () => {
  return (
    <div className="flex w-full">
      <div className="flex w-auto flex-col items-center">
        <div className="flex flex-col items-center gap-y-5 px-[20%] py-[2.5%] font-lora font-semibold text-sw-gold-100 sm:text-3xl md:text-4xl lg:text-6xl">
          <div>404</div>
          <div className="flex h-[4px] w-1/5 rounded-lg bg-sw-gold-100" />
          <div>PAGE NOT FOUND</div>
          <p className="text-center font-normal text-white sm:text-sm md:text-base lg:text-2xl">
            It seems you've ventured into uncharted space. The page you're
            seeking is hidden in the outer rim or lost in hyperspace. But fear
            not, young Padawan! Use the Force (or the navigation menu) to find
            your way back to the galaxy you know and love. May the Force be with
            you on your journey!
          </p>
        </div>
        <Link href="/" className="flex w-[30%] place-content-center">
          <Image
            src={Home}
            alt="Back To Home"
            className="duration-150 hover:scale-105"
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
