import { LISTINGS_URL } from "../constants.js";

/**
 * Retrieves a list of active listings that have associated bids and sellers.
 *
 * @async
 * @function
 * @returns {Promise<Array<Object>>} Returns an array of JSON objects, each representing a listing.
 * @throws {Error} Throws an error if the response from the server indicates a failure.
 *
 * @example
 * try {
 *   const listings = await getListings();
 *   console.log(listings);
 * } catch (error) {
 *   console.error("Failed to fetch active listings:", error.message);
 * }
 */

export async function getListings() {
  const URL = LISTINGS_URL + "?_active=true&_bids=true&_seller=true";
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
    if (json.statusCode === 404) {
      throw new Error(
        "Sorry, we encountered an issue connecting to our service. Please try again later.",
      );
    } else {
      throw new Error(json.errors[0].message);
    }
  }
}
