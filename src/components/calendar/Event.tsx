"use client";
import { useState } from "react";
import EventCard from "./EventCard";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "@/data/actions";
import logo1 from "@/public/eventsIcon/eventslogo1.svg";
import logo2 from "@/public/eventsIcon/eventslogo2.svg";
import logo3 from "@/public/eventsIcon/eventslogo3.svg";
import Filter from "./Filter";
import { FILTERS } from "@/data/filters";

type items = {
  id: string;
  summary: string;
  start: {
    dateTime: string;
  };
  location: string;
};

const Events = () => {
  const [filterId, setFilterId] = useState("upcoming");
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

  const logo = [logo1, logo2, logo3];

  const filteredEvents = data.items.filter((event: items) => {
    const eventDate = new Date(event.start.dateTime);
    const now = new Date();

    return filterId === "upcoming" ? eventDate >= now : eventDate < now;
  });

  const handleFilterChange = (id: string) => {
    setFilterId(id);
  };
  return (
    <div className="my-10 flex h-full w-full flex-col gap-5">
      <Filter filters={FILTERS} onChange={handleFilterChange} />
      <div className="flex w-full flex-wrap justify-center gap-10 md:gap-0">
        {filteredEvents.length > 0 ? (
          filteredEvents.slice(0, 6).map((element: items, index: number) => (
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
          ))
        ) : (
          <div className="h-screen w-full text-center text-lg font-medium text-white md:text-2xl">
            No {filterId === "upcoming" ? "upcoming" : "past"} events available.
            Check back later!
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
