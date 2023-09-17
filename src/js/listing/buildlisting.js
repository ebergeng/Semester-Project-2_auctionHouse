import { getListings } from "../api/listings/getlistings.js";
import { viewBids } from "../eventlisteners/viewbidlistener.js";

export function getLastBid(element) {
  let lastBid = 0;
  if (element.bids) {
    if (element.bids.length > 0) {
      lastBid = element.bids[element.bids.length - 1].amount;
    } else lastBid = 0;
  }

  return lastBid;
}

export async function buildListing(listings, container) {
  listings.forEach((element) => {
    const dataObject = new Date(element.endsAt);
    const date =
      dataObject.toLocaleDateString() + " " + dataObject.toLocaleTimeString();

    let bidLink;
    let modalHTML;

    if (localStorage.getItem("token")) {
      bidLink = `bidModal${element.id}`;
      modalHTML = `<div class="modal fade" id="bidModal${
        element.id
      }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body d-flex flex-column justify-content-center align-items-center">
                                    <input type="number" id="amountInput-${
                                      element.id
                                    }" min="0" max="50" value="${
                                      getLastBid(element) + 1
                                    }">
                                    <input type="range" class="form-range" id="customRange1" id="vol" name="vol" min="${
                                      getLastBid(element) + 1
                                    }" max="50" value="${getLastBid(element)}">
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-primary w-100">Place Bid</button>
                                </div>
                            </div>
                            </div>
                        </div>`;
    } else {
      bidLink = "loginModal";
    }

    const itemHTML = `<div class="card item col-sm-12 col-md-10 col-lg-8 m-2">
                            <div class="card-header bg-transparent d-flex justify-content-between">
                                <div>
                                    <h3 class="card-title">${element.title}</h3>
                                    <h4>Deadline:  ${date}</h4>
                                </div>
                                <h4 class="price">${getLastBid(element)}</h4>
                            </div>
                            <div class="card-body d-flex flex-column justify-content-center align-items-center img-container">
                                <img src="${
                                  element.media
                                }" alt="" class="img-fluid">
                                <p>${element.description}</p>

                            </div>
                            <div class="card-footer d-flex justify-content-between justify-content-center align-items-center bg-transparent">
                                <button
                                class="bg-transparent spesial-btn nav-link d-flex flex-column align-items-center"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#bidList"
                                data-id=${element.id}
                                id=${element.id}>
                                View Bids
                                <span><img src="/madia/icons/eye.png" alt=""></span>
                                </button>
                                <button
                                class="btn-primary costum-botton nav-link"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#${bidLink}">
                                Bid
                            </button>
                            </div>
                            
                            ${modalHTML}  
                        </div>`;
    container.innerHTML += itemHTML;
  });
}
