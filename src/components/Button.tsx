import Link from "next/link";

const Button = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link href={link}>
      <div className="relative mx-4 inline-block bg-black">
        <img src="/frame/learnframe.svg" alt="button frame" />
        <span className="absolute inset-0 flex items-center justify-center font-nunito text-2xl text-white">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default Button;
