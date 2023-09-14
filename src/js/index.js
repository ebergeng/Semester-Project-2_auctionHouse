import { registerFormListener } from "./eventlisteners/registerformlistener.js";
import { loginFormListener } from "./eventlisteners/loginformlisteners.js";
import { load } from "./helpers/lokalstore.js";
import { loadProfile } from "./profile/profile.js";
import { logOut } from "./eventlisteners/logoutlistener.js";

if (!load("token")) {
  registerFormListener();
  loginFormListener();
  document.querySelector("#logOutButton").remove();
} else {
  document.querySelector(".authButtons").remove();
  loadProfile();
  logOut();
}
