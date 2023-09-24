import { load } from "./localstoreload.js";

/**
 * Retrieves the email from the local storage's user data.
 *
 * @function
 * @async
 * @returns {string|undefined} The email if available, or undefined if not present.
 */
export async function getLocalStoreEmail() {
  const data = await JSON.parse(load("user"));
  return data?.email;
}
