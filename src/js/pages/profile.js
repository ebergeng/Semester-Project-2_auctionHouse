import * as localStore from "../lokalstore/index.js";
import { getProfileListings } from "../api/listing/getprofilelisting.js";
import { getBids } from "../api/listing/getbids.js";
import { Auction } from "../ui/listing/auction.js";
import { getListing } from "../api/listing/getlisting.js";
import * as loader from "../ui/common/loader/index.js";
import displayMessage from "../ui/common/displaymessage.js";
import * as formListeners from "../eventlisteners/formlisteners/index.js";
import * as buttonListener from "../eventlisteners/buttonlisteners/index.js";
import { viewBidListener } from "../eventlisteners/viewbidlistener.js";
import { backBtnListener } from "../eventlisteners/backbtnlistener.js";

/**
 * Initializes and renders the profile page.
 *
 * This function sets up various event listeners required for the functionality of the profile page,
 * including listeners for form submissions, button clicks, and viewing bids. It also fetches and displays
 * the user's profile details, their listings, and the bids they've placed.
 *
 * @async
 * @throws {Error} If there's an error while fetching profile listings or bids.
 */
export async function profilePage() {
  formListeners.addNewItemListener();
  formListeners.updateProfileListener();
  buttonListener.deleteItemListener();
  buttonListener.profilMenuListener();
  formListeners.placeBidListener();
  backBtnListener();
  viewBidListener();

  const profileContainer = document.querySelector("#profileContainer");
  const updateProfileModal = document.querySelector("#updateProfileModal");
  const myListingContainer = document.querySelector("#myListing");
  const myBidContainer = document.querySelector("#myBids");

  const profileName = await localStore.getLocalStoreName();
  const profileEmail = await localStore.getLocalStoreEmail();
  const profileAvater = await localStore.getLocalStoreAvatar();
  const profileCredits = await localStore.getLocalStoreCredits();

  profileContainer.querySelector("#profileName").innerHTML = profileName;
  profileContainer.querySelector("#profileEmail").innerHTML = profileEmail;
  profileContainer.querySelector("#profileImg").src = profileAvater;
  profileContainer.querySelector(
    "#profileCredits",
  ).innerHTML = `${profileCredits},-`;

  updateProfileModal.querySelector("#modalName").value = profileName;
  updateProfileModal.querySelector("#modalEmail").value = profileEmail;

  const bigLoader = loader.bigLoader();

  let myListing = [];
  async function buildMyListing() {
    myListingContainer.append(bigLoader);
    try {
      const listing = await getProfileListings(profileName);
      console.log(listing);

      listing.forEach((element) => {
        myListing.push(new Auction(element));
      });
    } catch (err) {
      console.log(err);
      displayMessage("danger", err, myListingContainer);
    }
    bigLoader.classList.add("d-none");
    myListing.forEach((element) => {
      myListingContainer.innerHTML += element.html;
    });
  }
  buildMyListing();

  async function buildMyBids() {
    try {
      const bids = await getBids(profileName);
      bids.forEach(async (element) => {
        const apiCall = await getListing(element.listing.id);
        let auction = new Auction(apiCall);
        myBidContainer.innerHTML += auction.html;
      });
    } catch (err) {
      console.log(err);
      displayMessage("danger", err, myBidContainer);
    }
  }
  buildMyBids();
}
