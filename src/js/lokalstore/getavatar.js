import { load } from "./localstoreload.js";

/**
 * Retrieves the avatar from the local storage's user data.
 *
 * @function
 * @async
 * @returns {string|undefined} The avatar URL if available, or undefined if not present.
 */
export async function getLocalStoreAvatar() {
  const data = await JSON.parse(load("user"));
  return data?.avatar;
}
