import { load } from "./localstoreload.js";

/**
 * Updates the avatar property of the user object in local storage.
 *
 * @param {string} avatar - The new avatar URL or data to be set.
 * @returns {Promise<void>} Resolves once the avatar has been updated in local storage.
 */
export async function setLocalStoreAvatar(avatar) {
  let user = load("user");
  user = JSON.parse(user);
  user.avatar = avatar;
  let upDateUser = JSON.stringify(user);
  localStorage.setItem("user", upDateUser);
}
