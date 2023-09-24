import { load } from "./localstoreload.js";

/**
 * Retrieves the name from the local storage's user data.
 *
 * @function
 * @async
 * @returns {string|undefined} The name if available, or undefined if not present.
 */
export async function getLocalStoreName() {
  const data = await JSON.parse(load("user"));
  return data?.name;
}
