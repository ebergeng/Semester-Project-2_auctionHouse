import { LOGIN_URL } from "../constants.js";

/**
 * Sends a login request with the provided profile data.
 *
 * @async
 * @function
 * @param {Object} profile - The user's profile data.
 * @param {string} profile.email - The user's email address.
 * @param {string} profile.password - The user's password.
 * @returns {Promise<Object>} The response data from the server.
 * @throws {Error} Throws an error if the response from the server is not OK, or if there are other issues.
 *
 * @example
 * const userData = {
 *   email: 'example@example.com',
 *   password: 'password123'
 * };
 *
 * try {
 *   const response = await login(userData);
 *   console.log(response);
 * } catch (error) {
 *   console.error("Login error:", error.message);
 * }
 */

export async function login(profile) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(profile),
  };

  const respons = await fetch(LOGIN_URL, options);
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
