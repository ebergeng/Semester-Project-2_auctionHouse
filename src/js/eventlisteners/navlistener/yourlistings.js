import { getProfileListings } from "../../api/listings/getprofilelistings.js";
import { load } from "../../helpers/lokalstore.js";
import { buildListing } from "../../listing/buildlisting.js";

export async function yourListingsListener() {
  const youItemBtn = document.querySelector("#yourItems");
  const allItemBtn = document.querySelector("#allItems");
  const yourBidsBtn = document.querySelector("#yourBids");
  const youListingsContainer = document.querySelector(".my-listings");
  const allListings = document.querySelector(".all-listings");

  youItemBtn.addEventListener("click", async () => {
    youListingsContainer.innerHTML = "<h1>Your Listings</h1>";
    allListings.classList.add("d-none");
    youItemBtn.classList.add("active");
    youListingsContainer.classList.remove("d-none");
    allItemBtn.classList.remove("active");
    yourBidsBtn.classList.remove("active");

    const profile = JSON.parse(load("user"));
    const listing = await getProfileListings(profile.name);
    buildListing(listing, youListingsContainer);
  });
}
