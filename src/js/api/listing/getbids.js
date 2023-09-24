import { PROFILE_URL } from "../constants.js";
import { getHeader } from "../../helpers/header.js";

/**
 * Fetches the bids for a specific profile based on the provided name.
 *
 * @async
 * @function
 * @param {string} name - The name associated with the profile whose bids need to be fetched.
 * @returns {Promise<Object>} Returns a JSON object containing the bids.
 * @throws {Error} Throws an error if the response from the server indicates a failure.
 *
 * @example
 * try {
 *   const bids = await getBids('JohnDoe');
 *   console.log(bids);
 * } catch (error) {
 *   console.error("Failed to fetch bids:", error.message);
 * }
 */
export async function getBids(name) {
  const URL = `${PROFILE_URL}/${name}/bids?_listings=true`;
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
