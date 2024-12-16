import Image, { StaticImageData } from "next/image";
import cardframe from "@/public/frame/cardframe.svg";

const Card = ({
  topText,
  bottomText,
  image,
}: {
  topText: string;
  bottomText: string;
  image: StaticImageData | string;
}) => {
  return (
    <div className="flex flex-col justify-center">
      <p className="-mb-1 text-lg font-bold md:-mb-3 md:text-3xl">{topText}</p>
      <div className="relative flex items-center justify-center">
        <Image
          src={cardframe}
          alt="cardframe"
          className="z-20 bg-transparent"
        />
        <Image
          src={image}
          alt="board"
          className="absolute inset-0 z-10 mt-[2px] h-full w-full object-cover py-[3.5px] md:mt-[4px] md:py-[10px]"
        />
      </div>
      <p className="self-end text-lg font-bold md:text-3xl">{bottomText}</p>
    </div>
  );
};

export default Card;
