const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
const CALENDAR_ID = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;

type EventProps = {
  date: Date;
  title: string;
  startTime: string;
  location: string;
};

type GoogleCalendarEvent = {
  start: { dateTime?: string; date?: string };
  summary?: string;
  location?: string;
};

export const fetchCalendarEvents = async (): Promise<EventProps[]> => {
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
  const events: EventProps[] = data.items.map((event: GoogleCalendarEvent) => {
    const date = new Date(event.start.dateTime || event.start.date || "");
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format in event data");
    }

    return {
      date,
      title: event.summary || "No Title",
      startTime: event.start.dateTime || event.start.date || "No Start Time",
      location: event.location || "N/A",
    };
  });

  return events;
};

export const fetchEvents = async () => {
  const now = new Date();

  const min = new Date(
    now.getTime() - 10 * 7 * 24 * 60 * 60 * 1000,
  ).toISOString();
  const max = new Date(
    now.getTime() + 10 * 7 * 24 * 60 * 60 * 1000,
  ).toISOString();

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&orderBy=startTime&singleEvents=true&timeMin=${
      min
    }&timeMax=${max}`,
  );

  if (!response.ok) {
    throw new Error("Failed to Fetch Events");
  }
  const data = await response.json();
  return data;
};
