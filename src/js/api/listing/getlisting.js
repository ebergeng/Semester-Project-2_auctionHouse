import { LISTINGS_URL } from "../constants.js";

/**
 * Retrieves details for a specific listing based on the provided listing ID.
 *
 * @async
 * @function
 * @param {string|number} id - The unique identifier for the listing.
 * @returns {Promise<Object>} Returns a JSON object containing the details of the listing.
 * @throws {Error} Throws an error if the response from the server indicates a failure.
 *
 * @example
 * try {
 *   const listingDetails = await getListing(12345);
 *   console.log(listingDetails);
 * } catch (error) {
 *   console.error("Failed to fetch listing details:", error.message);
 * }
 */

export async function getListing(id) {
  const URL = `${LISTINGS_URL}/${id}?_bids=true&_seller=true`;
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
