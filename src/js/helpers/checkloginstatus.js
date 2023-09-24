import * as localStore from "../lokalstore/index.js";

/**
 * Checks the login status of the user based on the presence of a token in local storage.
 *
 * @async
 * @function
 * @returns {Promise<boolean>} Returns true if a token exists in local storage, otherwise false.
 */

export async function checkLoginStatus() {
  const token = await localStore.getLocalStoreToken();
  if (token) {
    return true;
  } else {
    return false;
  }
}
