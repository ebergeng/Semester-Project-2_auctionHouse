import { LISTINGS_URL } from "../constants.js";
import { getHeader } from "../../helpers/header.js";

/**
 * Places a bid on a specific listing.
 *
 * @async
 * @function
 * @param {string} id - The ID of the listing on which to place a bid.
 * @param {number} amount - The amount of the bid.
 * @returns {Promise<Object>} Returns a JSON object representing the result of placing the bid.
 * @throws {Error} Throws an error if there's an issue connecting to the API.
 *
 * @example
 * try {
 *   const result = await placeBid("12345", 1000);
 *   console.log("Bid placed successfully:", result);
 * } catch (error) {
 *   console.error("Failed to place a bid:", error.message);
 * }
 */

export async function placeBid(id, amount) {
  const URL = `${LISTINGS_URL}/${id}/bids`;
  console.log(URL);
  const body = {
    amount: amount,
  };

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
    throw new Error("there was an error conncting to the API");
  }
}
