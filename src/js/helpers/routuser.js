import { checkLoginStatus } from "./checkloginstatus.js";

const authRoutes = ["/"];
const protectedRoutes = ["/listings/", "/profile/"];

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
