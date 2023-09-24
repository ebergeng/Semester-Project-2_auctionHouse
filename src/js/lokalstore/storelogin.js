/**
 * Stores the user's token and user object in the local storage.
 *
 * @param {string} token - The authentication token of the user.
 * @param {Object} user - The user object containing user details.
 */
export function storeLogin(token, user) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}
