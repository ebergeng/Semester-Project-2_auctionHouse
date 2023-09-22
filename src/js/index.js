import * as formlisteners from "./eventlisteners/formlisteners/index.js";
import { checkLoginStatus } from "./helpers/checkloginstatus.js";

function rout() {
  const path = window.location.pathname;
  checkLoginStatus(path);

  switch (path) {
    case "/":
    case "/index.html":
      formlisteners.loginFormListener();
      formlisteners.registerFormListener();
      break;
  }
}
rout();
