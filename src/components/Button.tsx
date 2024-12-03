import Link from "next/link";
import frame from "@/public/frame/learnframe.svg";
import Image from "next/image";
const Button = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link href={link} className="w-full">
      <div className="relative mx-4 inline-block bg-black">
        <Image src={frame} alt="button frame" className="w-[200px]" />
        <span className="absolute inset-0 flex items-center justify-center font-nunito text-lg font-medium text-white md:text-2xl">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default Button;
