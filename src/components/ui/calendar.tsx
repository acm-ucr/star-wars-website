"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { IoCalendarSharp, IoCloseOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

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
            "h-[7vw] w-[9.7vw] px-1 py-0 font-nunito text-[1vw] aria-selected:bg-sw-gold-100 aria-selected:text-sw-gold-200",
            selected
              ? "bg-sw-gold-100 text-black hover:bg-sw-gold-100 hover:text-black"
              : "",
            isToday ? "bg-muted" : "",
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
                <div className="truncate px-[3%] font-nunito">
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
            "flex justify-center pt-[0.5vh] relative items-center mb-[3vh] bg-sw-gold-100",
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
            <ArrowLeft
              color="#665045"
              className="h-[1.5vw] w-[1.5vw] scale-[200%]"
            />
          ),
          IconRight: () => (
            <ArrowRight
              color="#665045"
              className="h-[1.5vw] w-[1.5vw] scale-[200%]"
            />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative aspect-[8/3] w-[30vw] bg-sw-gold-100 p-[1%] font-nunito text-white shadow-lg">
            <div className="grid-cols grid grid-flow-col grid-cols-2 items-center">
              <h2 className="text-[1.5vw] font-bold underline underline-offset-[0.5vw]">
                {popupEvent.title}
              </h2>
              <IoCloseOutline
                onClick={() => setPopupEvent(null)}
                className="ml-[90%] scale-[200%] hover:scale-[240%] hover:cursor-pointer active:opacity-50"
              />
            </div>
            <p className="mt-[0.75vw] flex items-center text-[1vw]">
              <IoCalendarSharp className="mr-[0.5vw] scale-[150%]" />
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
            </p>
            <p className="mt-[0.75vw] flex items-center text-[1vw]">
              <FaLocationDot className="mr-[0.5vw] scale-[150%]" />
              {popupEvent.location.split(",")[0]}
              {popupEvent.location === "N/A" ? " " : ", "}
              {popupEvent.location.split(",")[1]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
