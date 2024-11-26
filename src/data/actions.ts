export const fetchEvents = async () => {
  const spreadsheetID = "1T10pbPlkNok9SEFU4NAy_DGdmB_eyPDS_dhFbQ_YlDo";
  const range = "Sheet1!A1:D6";
  const apiKey = "AIzaSyCnJLlmlCX0l7DnX0VdXEfE17Lb4Qg7u1E";

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values/${range}?key=${apiKey}`,
  );
  if (!response.ok) {
    throw new Error("Failed to Fetch Events");
  }

  return response.json();
};
