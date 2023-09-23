import * as formlisteners from "./eventlisteners/formlisteners/index.js";
import { checkLoginStatus } from "./helpers/checkloginstatus.js";
import { placeBidListener } from "./eventlisteners/placebidlistener.js";
import * as page from "./pages/index.js";
import { viewBidListener } from "./eventlisteners/viewbidlistener.js";

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
      viewBidListener();
      break;
    case "/profile/":
      page.profilePage();
      formlisteners.updateProfileListener();
      break;
  }
}
rout();
