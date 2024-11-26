export const fetchEvents = async () => {
  const spreadsheetID = "empty";
  const range = "Sheet1!A1:D6";
  const apiKey = "empty";

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values/${range}?key=${apiKey}`,
  );
  if (!response.ok) {
    throw new Error("Failed to Fetch Events");
  }

  return response.json();
};
