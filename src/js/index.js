import { registerFormListener } from "./eventlisteners/registerformlistener.js";
import { loginFormListener } from "./eventlisteners/loginformlisteners.js";
import { load } from "./helpers/lokalstore.js";
import { loadProfile } from "./profile/profile.js";
import { logOut } from "./eventlisteners/logoutlistener.js";
import { buildListing } from "./listing/buildlisting.js";
import { getListing } from "./api/listings/getlisting.js";
import { viewBids } from "./eventlisteners/viewbidlistener.js";

if (!load("token")) {
  registerFormListener();
  loginFormListener();
  buildListing();
  document.querySelector("#logOutButton").remove();
} else {
  document.querySelector(".authButtons").remove();
  loadProfile();
  buildListing();
  viewBids();

  logOut();
}
