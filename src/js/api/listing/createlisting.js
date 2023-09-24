import { LISTINGS_URL } from "../constants.js";
import { getHeader } from "../../helpers/header.js";
/**
 * Sends a request to create a new listing with the provided data.
 *
 * @async
 * @function
 * @param {Object} body - The data for the new listing.
 * @param {string} body.title - The title of the listing.
 * @param {string} body.description - Description for the listing.
 * @param {string} body.endsAt - When the listing ends.
 * @param {string[]} body.tags - Array of tags associated with the listing.
 * @param {string} body.media - Media URL for the listing.
 * // Add other body properties as needed
 * @returns {Promise<Object>} The response data from the server.
 * @throws {Error} Throws an error if the response from the server is not OK, or if there are other issues.
 *
 * @example
 * const newListingData = {
 *   title: 'Sample Listing',
 *   description: 'This is a sample listing',
 *   endsAt: '2023-09-21T18:14:08.515Z',
 *   tags: ['sample', 'listing'],
 *   media: 'http://example.com/sample.jpg'
 * };
 *
 * try {
 *   const response = await createListing(newListingData);
 *   console.log(response);
 * } catch (error) {
 *   console.error("Listing creation error:", error.message);
 * }
 */

export async function createListing(body) {
  const URL = `${LISTINGS_URL}`;
  const options = {
    headers: getHeader(),
    method: "POST",
    body: JSON.stringify(body),
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
