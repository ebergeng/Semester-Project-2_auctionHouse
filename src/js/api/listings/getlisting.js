import { LISTINGS_URL } from "../constants.js";

export async function getListing(id) {
  const URL = `${LISTINGS_URL}/${id}?_bids=true`;
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };

  const respons = await fetch(URL, options);
  const json = await respons.json();
  if (!respons.ok) {
    const errorMessage = json.errors[0].errorMessage;
    throw new Error(errorMessage);
  }

  return json;
}
