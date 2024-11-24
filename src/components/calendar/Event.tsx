import EventCard from "./EventCard";
import Wrapped from "./WrappedEvents";
import { eventList } from "@/data/event";

const Events = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Wrapped />
      <div className="flex w-full flex-wrap gap-0">
        {eventList.map((list, index) => (
          <div key={index} className="sm:w-1/2 lg:w-1/3">
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
