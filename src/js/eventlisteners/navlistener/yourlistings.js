import * as api from "../../api/listings/index.js";
import { getAuction } from "../auctions/getAuctions.js";

export async function yourListingsListener() {
  const btn = document.querySelector("#yourItems");
  const auctionsContainer = document.querySelector(".all-listings");

  btn.addEventListener("click", async () => {
    auctionsContainer.innerHTML = "<h1>Your Listings</h1>";
    document.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    btn.classList.add("active");
    getAuction(api.getProfileListings, auctionsContainer);
  });
}
