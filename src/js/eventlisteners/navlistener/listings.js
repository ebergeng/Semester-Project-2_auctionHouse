import { getListings } from "../../api/listings/getlistings.js";
import { buildListing } from "../../listing/buildlisting.js";

export async function allItemsListener() {
  const youItemBtn = document.querySelector("#yourItems");
  const allItemBtn = document.querySelector("#allItems");
  const yourBidsBtn = document.querySelector("#yourBids");
  const youListingsContainer = document.querySelector(".my-listings");
  const allListingsContainer = document.querySelector(".all-listings");

  allItemBtn.addEventListener("click", async () => {
    allListingsContainer.innerHTML = "<h1>All Listings</h1>";
    youListingsContainer.classList.add("d-none");
    allItemBtn.classList.add("active");
    allListingsContainer.classList.remove("d-none");
    youItemBtn.classList.remove("active");
    yourBidsBtn.classList.remove("active");
    const listing = await getListings();
    buildListing(listing, allListingsContainer);
  });
}
