import { LISTINGS_URL } from "../constants.js";
import { getHeader } from "../../helpers/header.js";
/**
 * Sends a request to delete a listing by its ID.
 *
 * @async
 * @function
 * @param {string|number} id - The ID of the listing to be deleted.
 * @returns {Promise<boolean>} Returns `true` if the listing was successfully deleted.
 * @throws {Error} Throws an error if the response from the server indicates a failure.
 *
 * @example
 * try {
 *   const isDeleted = await deleteListing(1234);
 *   if (isDeleted) {
 *     console.log("Listing was successfully deleted.");
 *   }
 * } catch (error) {
 *   console.error("Failed to delete listing:", error.message);
 * }
 */

export async function deleteListing(id) {
  const URL = `${LISTINGS_URL}/${id}`;
  const options = {
    headers: getHeader(),
    method: "DELETE",
  };

  const respons = await fetch(URL, options);
  if (respons.ok) {
    return true;
  }

  throw new Error(respons.statusText);
}
