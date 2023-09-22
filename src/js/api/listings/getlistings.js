import { LISTINGS_URL } from "../constants.js";

export async function getListings() {
  const URL = LISTINGS_URL + "?_active=true&_bids=true";
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };

  const respons = await fetch(URL, options);
  const json = await respons.json();
  if (respons.ok) {
    return json;
  } else {
    console.log(json.errors[0].errorMessage);
    throw new Error("there was an error conncting to the API");
  }
}
