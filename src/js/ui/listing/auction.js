import { load } from "../../api/lokalstore.js";

export class Auction {
  constructor(auction) {
    this.id = auction.id;
    this.seller = auction.seller.name;
    this.title = auction.title;
    this.description = auction.description;
    this.endsAt = this.date(auction.endsAt);
    this.media = auction.media;
    this.tags = auction.tags;
    this.bids = auction.bids;
    this.lastBid = this.getLastBid();
    this.html = this.generateHTML();
  }
  generateHTML() {
    return `<div class="card auction col-sm-12 col-md-10 col-lg-8 m-2">
                    <div class="card-header bg-transparent d-flex justify-content-between">
                        <div>
                            <h3 class="card-title">${this.title}</h3>
                            <h4>Deadline:  ${this.endsAt}</h4>
                        </div>
                        <div class="price">${this.lastBid},-</div>
                    </div>
                    <div class="card-body d-flex flex-column justify-content-center align-items-center img-container">
                        <img src="${this.media}" alt="" class="img-fluid">
                        <p>${this.description}</p>

                    </div>
                    ${this.footer()}
                </div>
                `;
  }

  footer() {
    if (load("token")) {
      return `<div class="card-footer d-flex justify-content-between justify-content-center align-items-center bg-transparent">
            <button
            class="bg-transparent spesial-btn nav-link d-flex flex-column align-items-center"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#bidList"
            data-id=${this.id}
            id=${this.id}>
            View Bids
            <span><img src="/madia/icons/eye.png" alt=""></span>
            </button>
    
            ${this.cta()}
        </div> `;
    } else {
      return "";
    }
  }

  cta() {
    const user = JSON.parse(load("user"));
    if (this.seller === user.name) {
      return `<button
            class="btn-secondary costum-botton nav-link"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#delModal${this.id}">
            Delete
        </button>`;
    } else {
      return `<button
            class="btn-primary costum-botton nav-link"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#placeBid"
            data-id=${this.id}>
            
            Bid
            </button>`;
    }
  }

  getLastBid() {
    let lastBid = 0;
    if (this.bids) {
      if (this.bids.length > 0) {
        lastBid = this.bids[this.bids.length - 1].amount;
      } else lastBid = 0;
    }
    return lastBid;
  }

  date(endsAt) {
    const dataObject = new Date(endsAt);
    const date =
      dataObject.toLocaleDateString() + " " + dataObject.toLocaleTimeString();
    return date;
  }
}
