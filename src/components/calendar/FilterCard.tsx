import { StaticImageData } from "next/image";
import Image from "next/image";

const FilterCard = ({
  frame,
  Message,
}: {
  frame: StaticImageData;
  Message: string;
}) => {
  return (
    <div className="image-item w-4/ relative mx-4 inline-block flex-wrap">
      <Image src={frame} alt={`Image ${0 + 1}`} />
      <span className="absolute inset-0 flex items-center justify-center font-nunito text-2xl">
        {Message}
      </span>
    </div>
  );
};

export default FilterCard;
