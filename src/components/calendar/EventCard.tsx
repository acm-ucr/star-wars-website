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
    <div className="flex flex-col border-2 border-white m-10">
      <div className="flex justify-center bg-sw-gold-100 bg-gradient-to-r from-sw-gold-100 via-sw-white to-sw-gold-200">
        <span className="my-[5%] sm:text-base md:text-xl lg:text-3xl font-semibold text-white">
          {name}
        </span>
      </div>
      <div className="flex flex-col justify-center text-center sm:text-base md:text-xl lg:text-3xl font-semibold text-white relative m-2">
        <Image src={logo} alt="Logo" className="absolute -bottom-6 left-2 bg-black" />
        <div>{date}</div>
        <div>{time}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default EventCard;
