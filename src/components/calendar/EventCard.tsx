import Image from "next/image";

const EventCard = ({
  name,
  date,
  time,
  location,
  logo,
}: {
  name: string;
  date: string;
  time: string;
  location: string;
  logo: string;
}) => {
  return (
    <div className="m-10 flex flex-col border-2 border-white">
      <div className="flex justify-center bg-sw-gold-100 bg-gradient-to-r from-sw-gold-100 via-sw-white to-sw-gold-200">
        <span className="my-[5%] font-semibold text-white sm:text-base md:text-xl lg:text-3xl">
          {name}
        </span>
      </div>
      <div className="relative m-2 flex flex-col justify-center text-center font-semibold text-white sm:text-base md:text-xl lg:text-3xl">
        <Image
          src={logo}
          alt="Logo"
          className="absolute -bottom-6 left-2 bg-black"
        />
        <div>{date}</div>
        <div>{time}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default EventCard;
