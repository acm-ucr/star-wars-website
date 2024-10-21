import EventCard from "./EventCard";
import { eventList } from "@/data/event";

const Events = () => {
  return (
    <div className="flex w-full">
      <div className="m-[5%] grid w-full grid-cols-3 gap-x-[10%] gap-y-[20%]">
        {eventList.map((list, index) => (
          <div key={index} className="">
            <EventCard
              key={index}
              name={list.eventName}
              date={list.eventDate}
              time={list.eventTime}
              location={list.eventLocation}
              logo={list.eventLogo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
