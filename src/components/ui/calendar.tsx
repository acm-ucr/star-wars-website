"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption:
          "justify-self-center flex justify-center pt-1 w-96 relative items-center border-4 border-[#DDA82A] bg-white top-10",
        caption_label:
          "text-4xl font-bold bg-gradient-to-b from-[#FFDF8C] via-sw-gold-100 to-sw-gold-200 bg-clip-text text-transparent my-2",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "h-7 w-7 bg-transparent p-0 opacity-100 hover:opacity-50",
        ),
        nav_button_previous: "absolute left-20",
        nav_button_next: "absolute right-20",
        table: "w-full border-collapse space-y-1 border-[3px] border-[#905803]",
        head_row: "flex justify-center bg-[#DDA82A]",
        head_cell:
          "font-bold h-16 text-4xl border-x border-white w-[178px] content-end p-0",
        row: "flex w-full",
        cell: cn(
          "border border-sw-gold-100 bg-white text-black relative p-0 text-center text-4xl focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "",
        ),
        day: cn(
          "h-36 w-44 p-0 font-normal aria-selected:bg-opacity-50 flex items-start justify-end p-2",
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-sw-gold-100 text-black focus:bg-sw-gold-100",
        day_today: "bg-sw-white bg-opacity-20 text-black",
        day_outside:
          "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/80 aria-selected:text-muted-foreground aria-selected:bg-opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        IconLeft: ({ ...props }) => (
          <ChevronLeftIcon className="h-7 w-7 stroke-sw-gold-100" />
        ),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        IconRight: ({ ...props }) => (
          <ChevronRightIcon className="h-7 w-7 stroke-sw-gold-100" />
        ),
      }}
      formatters={{
        formatCaption: (date) => format(date, "MMM yyyy"),
        formatWeekdayName: (weekday) => format(weekday, "EEE"),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
