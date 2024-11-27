export const fetchEvents = async () => {
  const min = new Date().toISOString();
  const max = new Date(
    new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
  ).toISOString();

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${min}&timeMax=${max}`,
  );
  if (!response.ok) {
    throw new Error("Failed to Fetch Events");
  }

  return response.json();
};
