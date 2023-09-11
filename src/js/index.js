import { registerFormListener } from "./eventlisteners/registerformlistener.js";
import { loginFormListener } from "./eventlisteners/loginformlisteners.js";
import { load } from "./api/lokalstore.js";

if (!load("token")) {
  registerFormListener();
  loginFormListener();
} else {
  const buttons = document.querySelector(".authButtons");
  buttons.remove();
}
