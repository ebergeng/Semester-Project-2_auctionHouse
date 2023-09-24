import { load } from "./localstoreload.js";

/**
 * Updates the credits property of the user object in local storage.
 *
 * @param {number} credits - The new credit value to be set.
 * @returns {Promise<void>} Resolves once the credits have been updated in local storage.
 */
export async function setLocalStoreCredits(credits) {
  let user = load("user");
  user = JSON.parse(user);
  user.credits = credits;
  let upDateUser = JSON.stringify(user);
  localStorage.setItem("user", upDateUser);
}
