import Image from "next/image";
import cardframe from "@/public/frame/cardframe.svg";

const Card = ({
  topText,
  bottomText,
}: {
  topText: string;
  bottomText: string;
}) => {
  return (
    <div className="flex flex-col justify-center">
      <p className="-mb-3 text-3xl font-bold">{topText}</p>
      <Image src={cardframe} alt="cardframe" />
      <p className="self-end text-3xl font-bold">{bottomText}</p>
    </div>
  );
};

export default Card;
