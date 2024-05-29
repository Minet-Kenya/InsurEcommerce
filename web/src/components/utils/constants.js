export const BASE_URL = "http://localhost:8000/api";
export const BASE_URL_HOME = "http://localhost:8000/";

export async function fetchData(
  url,
  method = "GET",
  data = null,
  authToken = null
) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
  }

  const options = {
    method: method.toUpperCase(),
    headers: headers,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      let errors = await response.json();
      // console.log(errors);
      throw new Error(`HTTP error! Status: ${errors}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    // console.error("Fetch error:", error);
    throw error;
  }
}
