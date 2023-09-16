import { getListing } from "../api/listings/getlisting.js";

export function buildVeiwBids(listing) {
  const container = document.querySelector(".bids-data");
  container.innerHTML = "";

  let count = 1;
  listing.bids.forEach((element) => {
    const HTML = `<tr>
                    <th scope="row">${count}</th>
                    <td>${element.bidderName}</td>
                    <td>${element.amount}</td>
                </tr>`;
    container.innerHTML += HTML;
    count += 1;
  });
}

export async function viewBids() {
  const modal = document.querySelector("#bidList");
  modal.addEventListener("show.bs.modal", async function (event) {
    const button = event.relatedTarget;
    const id = button.getAttribute("data-id");
    const listing = await getListing(id);
    buildVeiwBids(listing);
  });
}
