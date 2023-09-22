import * as formlisteners from "./eventlisteners/formlisteners/index.js";
import { checkLoginStatus } from "./helpers/checkloginstatus.js";
import { getAuctions } from "./pages/start.js";

function rout() {
  const path = window.location.pathname;
  checkLoginStatus(path);

  switch (path) {
    case "/":
    case "/index.html":
      formlisteners.loginFormListener();
      formlisteners.registerFormListener();
      getAuctions();
      break;
    case "/listings/":
      getAuctions();
      break;
  }
}
rout();
