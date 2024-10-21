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
    <div className="flex w-full flex-col border-2 border-white">
      <div className="flex justify-center bg-sw-gold-100 bg-gradient-to-r from-sw-gold-100 via-sw-white to-sw-gold-200">
        <span className="my-[5%] text-3xl font-semibold text-white">
          {name}
        </span>
      </div>
      <div className="flex flex-col justify-center text-center">
        <span className="text-3xl font-semibold text-white">{date}</span>
        <span className="text-3xl font-semibold text-white">{time}</span>
        <span className="text-3xl font-semibold text-white">{location}</span>
        <Image src={logo} alt="Logo" className="absolute pt-20" />
      </div>
    </div>
  );
};

export default EventCard;
