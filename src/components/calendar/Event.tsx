import EventCard from "./EventCard";
import { eventList } from "@/data/event";

const Events = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-wrap w-full gap-0">
        {eventList.map((list, index) => (
          <div key={index} className="lg:w-1/3 sm:w-1/2">
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
