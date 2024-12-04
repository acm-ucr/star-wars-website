import Image, { StaticImageData } from "next/image";
import cardframe from "@/public/frame/cardframe.svg";

const Card = ({
  topText,
  bottomText,
  image,
}: {
  topText: string;
  bottomText: string;
  image: StaticImageData;
}) => {
  return (
    <div className="flex flex-col justify-center">
      <p className="-mb-3 text-3xl font-bold">{topText}</p>
      <div className="relative flex items-center justify-center">
        <Image src={cardframe} alt="cardframe" className="bg-transparent" />
        <Image
          src={image}
          alt="board"
          className="absolute inset-0 m-8 h-5/6 w-4/5 object-cover"
        />
      </div>
      <p className="self-end text-3xl font-bold">{bottomText}</p>
    </div>
  );
};

export default Card;
