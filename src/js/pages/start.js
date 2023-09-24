import { getListings } from "../api/listing/getlistings.js";
import { Auction } from "../ui/listing/auction.js";
import displayMessage from "../ui/common/displaymessage.js";
import { bigLoader } from "../ui/common/loader/bigloader.js";

/**
 * Fetches and renders a list of auctions from the API to the container.
 *
 * The function initiates by displaying a loader on the container. It then fetches the auctions using
 * the `getListings` API call. After successfully fetching the listings, it instantiates the `Auction`
 * objects for each item and appends their HTML representation to the container.
 *
 * @async
 * @returns {Auction[]} Array of Auction objects created from the API response.
 * @throws {Error} If there's an error while fetching the listings.
 */
export async function getAuctions() {
  const container = document.querySelector(".wrapper");
  const loader = bigLoader();
  container.append(loader);

  try {
    const apiCall = await getListings();
    loader.remove();
    const allItems = [];
    apiCall.forEach((element) => {
      allItems.push(new Auction(element));
    });
    allItems.forEach((auction) => {
      container.innerHTML += auction.html;
    });
    return allItems;
  } catch (error) {
    displayMessage("danger", error, container);
  }
}
