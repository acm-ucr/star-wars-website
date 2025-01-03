"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export interface EventProps {
  date: Date;
  title: string;
  startTime: string;
  location: string;
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  events = [],
  ...props
}: CalendarProps & { events: EventProps[] }) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    undefined,
  );
  const [popupEvent, setPopupEvent] = React.useState<EventProps | null>(null);

  const eventDays = events.map((event) => event.date);

  const modifiers = {
    hasEvent: (date: {
      getFullYear: () => number;
      getMonth: () => number;
      getDate: () => number;
    }) =>
      eventDays.some(
        (eventDate) =>
          date.getFullYear() === eventDate.getFullYear() &&
          date.getMonth() === eventDate.getMonth() &&
          date.getDate() === eventDate.getDate(),
      ),
  };

  const CustomDay: React.FC<{
    date: Date;
    selected: boolean;
    onClick: (date: Date) => void;
  }> = ({ date, selected, onClick }) => {
    const today = new Date();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    const dayEvents = events.filter(
      (event) =>
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate(),
    );

    return (
      <div className="relative overflow-clip text-[1vw]">
        <div
          onClick={() => onClick(date)}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "h-[10vw] w-[9.7vw] px-1 py-0 font-nunito text-[2vw] aria-selected:bg-sw-gold-100 aria-selected:text-sw-gold-200 md:h-[7vw] md:text-[1vw]",
            selected
              ? "bg-sw-gold-100 text-black hover:bg-sw-gold-100 hover:text-black"
              : "",
            isToday ? "bg-sw-gold-100/70" : "",
          )}
        >
          {date.getDate()}
        </div>

        {dayEvents.length > 0 && (
          <div className="absolute left-[5%] top-[28%] w-[90%]">
            {dayEvents.map((event, index) => (
              <div
                key={index}
                onClick={() => setPopupEvent(event)}
                className="mb-[3%] cursor-pointer rounded-lg border border-sw-gold-200 bg-sw-gold-100 text-[0.9vw] text-black"
              >
                <div className="truncate px-[3%] font-nunito font-semibold">
                  {new Date(event.startTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  {event.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-0", className)}
        modifiers={modifiers}
        classNames={{
          month: "space-y-[1vw]",
          caption:
            "flex justify-center pt-[0.5vh] relative items-center mb-[3vh] bg-transparent text-sw-gold-100",
          caption_label: "text-[4vw] font-nunito",
          nav: "space-x-[0.5vw] flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-[2vw] w-[2vw] bg-transparent p-0",
          ),
          nav_button_previous: "absolute left-[15vw]",
          nav_button_next: "absolute right-[15vw]",
          table: "w-full space-y-[1vw] bg-white rounded-xl shadow-black",
          head_row:
            "flex bg-sw-gold-100 -mb-1 w-full aspect-[15/1] rounded-t-xl text-center items-center",
          head_cell: "rounded-md w-[9.7vw] font-nunito text-[1.2vw] text-black",
          row: "flex w-full mt-[0.5vh]",
          cell: "relative aspect-[4/1] p-0 text-center text-[1vw]",
          day_today: "bg-accent text-accent-foreground",
          day_outside:
            "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          ...classNames,
        }}
        formatters={{
          formatWeekdayName: (date) => {
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            return days[date.getDay()];
          },
        }}
        components={{
          IconLeft: () => (
            <ArrowLeft className="h-[1.5vw] w-[1.5vw] scale-[200%] text-sw-gold-100" />
          ),
          IconRight: () => (
            <ArrowRight className="h-[1.5vw] w-[1.5vw] scale-[200%] text-sw-gold-100" />
          ),
          Day: (props) => (
            <CustomDay
              {...props}
              selected={props.date.getTime() === selectedDate?.getTime()}
              onClick={setSelectedDate}
            />
          ),
        }}
        {...props}
      />

      {popupEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 text-black">
          <div className="w-full max-w-md rounded bg-sw-gold-100 p-5 text-white shadow-md">
            <h3 className="mb-2 text-xl font-bold">{popupEvent.title}</h3>
            {popupEvent.date.toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
            {" at "}
            {new Date(popupEvent.startTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            <p>
              <strong>Location:</strong> {popupEvent.location || "N/A"}
            </p>
            <button
              className="mt-4 rounded bg-red-500 px-4 py-2 text-white duration-300 hover:opacity-70"
              onClick={() => setPopupEvent(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
