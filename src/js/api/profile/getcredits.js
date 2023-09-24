import { PROFILE_URL } from "../constants.js";
import { getHeader } from "../../helpers/header.js";

/**
 * Retrieves the credit balance of a specific profile.
 *
 * @async
 * @function
 * @param {string} name - The name of the profile whose credits are to be fetched.
 * @returns {Promise<number>} Returns the credit balance of the profile.
 * @throws {Error} Throws an error if there's an issue connecting to the API or if the specified profile is not found.
 *
 * @example
 * try {
 *   const credits = await getCredits("JohnDoe");
 *   console.log("JohnDoe's credits:", credits);
 * } catch (error) {
 *   console.error("Failed to fetch credits:", error.message);
 * }
 */

export async function getCredits(name) {
  const URL = `${PROFILE_URL}/${name}/credits`;

  const options = {
    headers: getHeader(),
    method: "GET",
  };

  const respons = await fetch(URL, options);
  const json = await respons.json();

  if (respons.ok) {
    return json.credits;
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
