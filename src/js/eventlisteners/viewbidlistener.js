import { getListing } from "../api/listing/getlisting.js";
import { buildBidsList } from "../ui/listing/bidlist.js";

export async function viewBidListener() {
  const modal = document.querySelector("#bidList");
  modal.addEventListener("show.bs.modal", async function (event) {
    const button = event.relatedTarget;
    const id = button.getAttribute("data-id");
    const auction = await getListing(id);
    buildBidsList(auction);
  });
}
