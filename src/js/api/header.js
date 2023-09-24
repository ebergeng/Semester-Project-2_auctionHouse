import { load } from "./lokalstore";

/**
 * Generates and returns request headers including the authentication token.
 *
 * @function
 * @returns {Object} Headers object containing the 'Content-Type' and 'Authorization' fields.
 *
 * @example
 * const requestOptions = {
 *   method: "GET",
 *   headers: getHeader(),
 * };
 * fetch(url, requestOptions).then(response => console.log(response));
 */

export function getHeader() {
  const token = load("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}}`,
  };
}
