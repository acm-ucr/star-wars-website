import { QueryClient, useQuery } from "@tanstack/react-query";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
const CALENDAR_ID = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;

type CalendarEvent = {
  id: string;
  summary: string;
  location?: string;
  start: { dateTime: string };
  end: { dateTime: string };
};

export const fetchCalendarEvents = async (): Promise<CalendarEvent[]> => {
  if (!API_KEY || !CALENDAR_ID) {
    throw new Error("Google Calendar API key or calendar ID is missing.");
  }
  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    console.error(`Error fetching calendar events: ${response.statusText}`);
    throw new Error(`Failed to fetch calendar events: ${response.status}`);
  }

  const data = await response.json();

  if (!data || !data.items) {
    console.error("Unexpected API response structure", data);
    throw new Error("Unexpected API response");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const events: CalendarEvent[] = data.items.map((item: any) => ({
    id: item.id || "No ID",
    summary: item.summary || "No Title",
    location: item.location || "No Location",
    start: {
      dateTime: item.start.dateTime || item.start.date || "No Start Time",
    },
    end: { dateTime: item.end.dateTime || item.end.date || "No End Time" },
  }));

  return events;
};

export const queryClient = new QueryClient();

export const useCalendarEvents = () => {
  return useQuery({
    queryKey: ["calendarEvents"],
    queryFn: fetchCalendarEvents,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
