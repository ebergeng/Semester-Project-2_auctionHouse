import { REG_URL } from "../constants.js";
/**
 * Sends a registration request with the provided profile data.
 *
 * @async
 * @function
 * @param {Object} profile - The user's profile data for registration.
 * @param {string} profile.name - The user's name.
 * @param {string} profile.email - The user's email address.
 * @param {string} profile.password - The user's desired password.
 * // Add other profile properties as needed
 * @returns {Promise<Object>} The response data from the server.
 * @throws {Error} Throws an error if the response from the server is not OK, or if there are other issues.
 *
 * @example
 * const newUserData = {
 *   name: 'John Doe',
 *   email: 'john.doe@example.com',
 *   password: 'password123'
 * };
 *
 * try {
 *   const response = await register(newUserData);
 *   console.log(response);
 * } catch (error) {
 *   console.error("Registration error:", error.message);
 * }
 */

export async function register(profile) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(profile),
  };

  const respons = await fetch(REG_URL, options);
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
