import { registerFormListener } from "./eventlisteners/registerformlistener.js";
import { loginFormListener } from "./eventlisteners/loginformlisteners.js";
import { load } from "./helpers/lokalstore.js";
import { loadProfile } from "./profile/profile.js";
import { logOut } from "./eventlisteners/logoutlistener.js";
import { buildListing } from "./listing/buildlisting.js";
import { viewBids } from "./eventlisteners/viewbidlistener.js";
import { yourListingsListener } from "./eventlisteners/navlistener/yourlistings.js";
import { allItemsListener } from "./eventlisteners/navlistener/listings.js";
import { getListings } from "./api/listings/getlistings.js";

async function appBuild() {
  if (!load("token")) {
    registerFormListener();
    loginFormListener();
    buildListing();
    document.querySelector("#logOutButton").remove();
  } else {
    document.querySelector(".authButtons").remove();
    const container = document.querySelector(".all-listings");
    loadProfile();
    buildListing(await getListings(), container);
    viewBids();
    yourListingsListener();
    allItemsListener();
    logOut();
  }
}

appBuild();
