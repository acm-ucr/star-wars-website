"use client";
import EventCard from "./EventCard";
import Wrapped from "./WrappedEvents";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "@/data/actions";
import logo1 from "@/public/eventsIcon/eventslogo1.svg";
import logo2 from "@/public/eventsIcon/eventslogo2.svg";
import logo3 from "@/public/eventsIcon/eventslogo3.svg";

const Events = () => {
  const { isFetching, isError, data, error } = useQuery({
    queryKey: ["Events"],
    queryFn: fetchEvents,
  });

  if (isFetching) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  type items = {
    id: string;
    summary: string;
    start: {
      dateTime: string;
    };
    location: string;
  };

  const logo = [logo1, logo2, logo3];

  return (
    <div className="flex w-full flex-col gap-5">
      <Wrapped />
      <div className="flex w-full flex-wrap gap-0">
        {data.items.slice(0, 6).map((element: items, index: number) => (
          <div key={element.id} className="sm:w-1/2 lg:w-1/3">
            <EventCard
              name={element.summary}
              date={new Date(element.start.dateTime).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long", day: "numeric" },
              )}
              time={new Date(element.start.dateTime).toLocaleTimeString(
                "en-US",
                { timeZone: "UTC" },
              )}
              location={element.location}
              logo={logo[index % logo.length]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
