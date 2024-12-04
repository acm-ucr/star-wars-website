import Link from "next/link";
import frame from "@/public/frame/learnframe.svg";
import Image from "next/image";
const Button = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link href={link} className="w-full">
      <div className="relative mx-4 inline-block bg-black">
        <Image
          src={frame}
          alt="button frame"
          className="w-[200px] scale-150 md:scale-100"
        />
        <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap font-nunito text-base font-medium text-white md:text-2xl">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default Button;
