/**
 * Retrieves the token from local storage.
 *
 * @function
 * @async
 * @returns {string|null} The token if available, or null if not present.
 */
export async function getLocalStoreToken() {
  return localStorage.getItem("token");
}
