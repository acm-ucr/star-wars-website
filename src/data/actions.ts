export const fetchEvents = async () => {
  const date = new Date().toISOString();

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&timeMin=${date}&singleEvents=true&orderBy=startTime`,
  );
  if (!response.ok) {
    throw new Error("Failed to Fetch Events");
  }

  return response.json();
};
