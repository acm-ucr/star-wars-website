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
import { Loader } from "lucide-react";

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
    const dateTime = event.start?.dateTime;
    if (!dateTime) return false;

    const eventDate = new Date(dateTime);
    const now = new Date();

    return filterId === "upcoming" ? eventDate >= now : eventDate < now;
  });
  const handleFilterChange = (id: string) => {
    setFilterId(id);
  };
  return (
    <div className="my-10 flex h-full w-full flex-col gap-5">
      <Filter filters={FILTERS} onChange={handleFilterChange} />
      {isFetching && (
        <div className="flex w-full items-center justify-center gap-4 bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text text-center text-sm font-semibold text-transparent md:text-3xl">
          Currently fetching data from hyperpace{" "}
          <span>
            <Loader className="text-sw-white" />
          </span>
        </div>
      )}
      <div className="flex w-full flex-wrap justify-center gap-10 md:gap-0">
        {filteredEvents.length > 0 ? (
          filteredEvents.slice(0, 6).map((element: items, index: number) => (
            <div key={index} className="w-4/5 sm:w-1/2 lg:w-1/3">
              <EventCard
                name={element.summary}
                date={new Date(element.start.dateTime).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "long", day: "numeric" },
                )}
                time={new Date(element.start.dateTime).toLocaleTimeString(
                  "en-US",
                  {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  },
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
