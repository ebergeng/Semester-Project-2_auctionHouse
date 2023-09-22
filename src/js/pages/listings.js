import { getListings } from "../api/listing/getlistings.js";
import { Auction } from "../ui/listing/auction.js";
import displayMessage from "../ui/common/displaymessage.js";
import { bigLoader } from "../ui/common/loader/bigloader.js";

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
    console.log(allItems);
    allItems.forEach((auction) => {
      container.innerHTML += auction.html;
    });
    return allItems;
  } catch (error) {
    displayMessage("danger", error, container);
  }
}
