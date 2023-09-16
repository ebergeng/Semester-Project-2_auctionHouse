import { LISTINGS_URL } from "../constants.js";
import { getHeader } from "../headers.js";

export async function createListing(body) {
  const URL = `${LISTINGS_URL}`;
  const options = {
    headers: getHeader(),
    method: "POST",
    body: JSON.stringify(body),
  };

  const respons = await fetch(URL, options);
  if (!respons.ok) {
    const error = await respons.json();
    const errorMessage = error.errors[0].message;
    throw new Error(errorMessage);
  }
  return true;
}
