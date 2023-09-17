import { getListings } from "../../api/listings/getlistings.js";
import { buildListing } from "../../listing/buildlisting.js";

export async function allItemsListener() {
  const allItemBtn = document.querySelector("#allItems");
  const youListingsContainer = document.querySelector(".my-listings");
  const allListingsContainer = document.querySelector(".all-listings");

  allItemBtn.addEventListener("click", async () => {
    allListingsContainer.innerHTML = "<h1>All Listings</h1>";
    youListingsContainer.classList.add("d-none");

    allListingsContainer.classList.remove("d-none");
    document.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    allItemBtn.classList.add("active");
    const listing = await getListings();
    buildListing(listing, allListingsContainer);
  });
}
