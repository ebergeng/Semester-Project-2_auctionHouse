import * as formlisteners from "./eventlisteners/formlisteners/index.js";
import { checkLoginStatus } from "./helpers/checkloginstatus.js";
import { getAuctions } from "./pages/start.js";
import { placeBidListener } from "./eventlisteners/placebidlistener.js";
import * as page from "./pages/index.js";

function rout() {
  const path = window.location.pathname;
  checkLoginStatus(path);

  switch (path) {
    case "/":
    case "/index.html":
      formlisteners.loginFormListener();
      formlisteners.registerFormListener();
      page.getAuctions();
      break;
    case "/listings/":
      page.getAuctions();
      placeBidListener();
      page.listingsPage();
      break;
  }
}
rout();
