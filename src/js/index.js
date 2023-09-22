import { registerFormListener } from "./eventlisteners/registerformlistener.js";
import { loginFormListener } from "./eventlisteners/loginformlisteners.js";
import { load } from "./helpers/lokalstore.js";
import { loadProfile } from "./profile/profile.js";
import { logOut } from "./eventlisteners/logoutlistener.js";
import { viewBids } from "./eventlisteners/viewbidlistener.js";
import { yourListingsListener } from "./eventlisteners/navlistener/yourlistings.js";
import { getAuction } from "./eventlisteners/auctions/getAuctions.js";
import * as api from "../js/api/listings/index.js";
import { allItemsListener } from "./eventlisteners/navlistener/listings.js";

async function appBuild() {
  const container = document.querySelector(".all-listings");
  if (!load("token")) {
    document.querySelector("#profileMenu").classList.add("d-none");
    registerFormListener();
    loginFormListener();
    getAuction(api.getListings, container);

    document.querySelector("#logOutButton").remove();
  } else {
    document.querySelector("#profileMenu").classList.remove("d-none");
    document.querySelector(".authButtons").remove();
    getAuction(api.getListings, container);
    loadProfile();
    viewBids();
    yourListingsListener();
    allItemsListener();
    logOut();
  }
}

appBuild();
