import { getListing } from "../api/listing/getlisting.js";
import { buildBidsList } from "../ui/listing/bidlist.js";
/**
 * Attaches an event listener to the bid list modal which fetches and displays
 * bids for a specific auction listing when the modal is shown.
 *
 * This function:
 * - Selects the modal with the ID 'bidList' from the DOM.
 * - Listens for the modal's 'show.bs.modal' event which is triggered just before the modal is shown.
 * - When the modal is about to be shown:
 *   - Retrieves the 'data-id' attribute from the button or element that triggered the modal. This ID represents the auction listing's identifier.
 *   - Calls the `getListing` function to fetch auction details for the specified ID.
 *   - Uses the `buildBidsList` function to populate the modal with a list of bids associated with the retrieved auction.
 *
 *
 * @function
 * @async
 */
export async function viewBidListener() {
  const modal = document.querySelector("#bidList");
  modal.addEventListener("show.bs.modal", async function (event) {
    const button = event.relatedTarget;
    const id = button.getAttribute("data-id");
    const auction = await getListing(id);
    buildBidsList(auction);
  });
}
