import { PROFILE_URL } from "../constants.js";
import { getHeader } from "../../helpers/header.js";

/**
 * Retrieves a list of listings associated with a specific profile, including associated bids and sellers.
 *
 * @async
 * @function
 * @param {string} name - The name of the profile to retrieve listings for.
 * @returns {Promise<Array<Object>>} Returns an array of JSON objects, each representing a listing.
 * @throws {Error} Throws an error if the response from the server indicates a failure or if there are other issues connecting to the service.
 *
 * @example
 * try {
 *   const listings = await getProfileListings("johnDoe");
 *   console.log(listings);
 * } catch (error) {
 *   console.error("Failed to fetch listings for profile:", error.message);
 * }
 */
export async function getProfileListings(name) {
  const URL = `${PROFILE_URL}/${name}/listings?_bids=true&_seller=true`;
  const options = {
    headers: getHeader(),
    method: "GET",
  };

  const respons = await fetch(URL, options);
  const json = await respons.json();
  if (respons.ok) {
    return json;
  } else {
    if (json.statusCode === 404) {
      throw new Error(
        "Sorry, we encountered an issue connecting to our service. Please try again later.",
      );
    } else {
      throw new Error(json.errors[0].message);
    }
  }
}
