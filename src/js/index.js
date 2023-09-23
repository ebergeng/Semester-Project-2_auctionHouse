import * as formlisteners from "./eventlisteners/formlisteners/index.js";
import { routeUser } from "./helpers/routuser.js";
import { placeBidListener } from "./eventlisteners/placebidlistener.js";
import * as page from "./pages/index.js";
import { viewBidListener } from "./eventlisteners/viewbidlistener.js";
import { createMenu } from "./ui/navbar.js";
import { logOutButtonListener } from "./eventlisteners/buttonlisteners/logoutbuttonlistener.js";

async function rout() {
  const path = window.location.pathname;
  routeUser(path);
  logOutButtonListener();
  await createMenu(path);

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
      viewBidListener();
      break;
  }
}
rout();
