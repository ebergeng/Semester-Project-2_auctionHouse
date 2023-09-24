import { getHeader } from "../../helpers/header.js";
import { PROFILE_URL } from "../constants.js";
import * as localStore from "../../lokalstore/index.js";

/**
 * Updates the avatar of a profile.
 *
 * @async
 * @function
 * @param {string} avatar - The new avatar URL to be set for the profile.
 * @returns {Promise<Object>} Returns the updated profile JSON response.
 * @throws {Error} Throws an error if there's an issue connecting to the API or if the specified profile is not found.
 *
 * @example
 * try {
 *   const updatedProfile = await updateProfile("https://example.com/new-avatar.jpg");
 *   console.log("Updated Profile:", updatedProfile);
 * } catch (error) {
 *   console.error("Failed to update profile:", error.message);
 * }
 */

export async function updateProfile(avatar) {
  const URL = `${PROFILE_URL}/${await localStore.getLocalStoreName()}/media`;
  const body = {
    avatar: avatar,
  };
  const options = {
    headers: getHeader(),
    method: "PUT",
    body: JSON.stringify(body),
  };

  const respons = await fetch(URL, options);
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
