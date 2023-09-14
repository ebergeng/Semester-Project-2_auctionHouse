import { registerFormListener } from "./eventlisteners/registerformlistener.js";
import { loginFormListener } from "./eventlisteners/loginformlisteners.js";
import { load } from "./api/lokalstore.js";
import { loadProfile } from "./profile/profile.js";

if (!load("token")) {
  registerFormListener();
  loginFormListener();
  document.querySelector("#logOutButton").remove();
} else {
  document.querySelector(".authButtons").remove();
  loadProfile();
}
