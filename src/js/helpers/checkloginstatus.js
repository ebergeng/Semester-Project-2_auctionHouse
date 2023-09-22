import { load } from "../api/lokalstore.js";

const authRoutes = ["/"];
const protectedRoutes = ["/listings/"];

export function checkLoginStatus(path) {
  if (load("token")) {
    if (authRoutes.includes(path)) {
      location.href = "/listings";
    }
  } else {
    if (protectedRoutes.includes(path)) {
      location.href = "/";
    }
  }
}
