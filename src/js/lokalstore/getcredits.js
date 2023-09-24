import { load } from "./localstoreload.js";

/**
 * Retrieves the credits from the local storage's user data.
 *
 * @function
 * @async
 * @returns {number|undefined} The number of credits if available, or undefined if not present.
 */
export async function getLocalStoreCredits() {
  const data = await JSON.parse(load("user"));
  return data?.credits;
}
