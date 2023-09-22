import { buildListing } from "../../listing/buildlisting.js";
import displayMessage from "../../ui/common/displayMessage.js";
import { loader } from "../../ui/common/loader.js";

export async function getAuction(listings, container) {
  const load = loader();
  container.appendChild(load);
  try {
    buildListing(await listings(), container);
  } catch (error) {
    console.log(error);
    displayMessage("danger", error, container);
  }
  container.removeChild(document.querySelector(".loader"));
}
