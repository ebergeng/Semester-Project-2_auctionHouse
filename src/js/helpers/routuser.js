import { checkLoginStatus } from "./checkloginstatus.js";

const authRoutes = ["/"];
const protectedRoutes = ["/listings/", "/profile/"];

/**
 * Routes the user based on their login status and the specified path.
 * If the user is logged in and attempts to access an authentication route, they are redirected to "/listings".
 * If the user is not logged in and attempts to access a protected route, they are redirected to the root "/".
 *
 * @function
 * @async
 * @param {string} path - The current path or route the user is attempting to access.
 */
export async function routeUser(path) {
  if (await checkLoginStatus()) {
    if (authRoutes.includes(path)) {
      location.href = "/listings";
    }
  } else {
    if (protectedRoutes.includes(path)) {
      location.href = "/";
    }
  }
}
