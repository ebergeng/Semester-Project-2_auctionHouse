import { load } from "../../api/lokalstore.js";
/**
 * Represents an auction card which contains details about the auction item.
 * It provides methods to generate the HTML representation of the auction,
 * define the last bid, and format the date.
 *
 * @class
 */

export class Auction {
  /**
   * Creates an instance of the Auction class.
   *
   * @param {Object} auction - The auction data.
   * @param {number} auction.id - Unique identifier for the auction.
   * @param {Object} auction.seller - Information about the seller.
   * @param {string} auction.seller.name - The name of the seller.
   * @param {string} auction.title - The title of the auction.
   * @param {string} auction.description - A description of the auction item.
   * @param {string} auction.endsAt - The date-time when the auction ends.
   * @param {string} auction.media - URL to the media/image of the auction item.
   * @param {string[]} auction.tags - Array of tags associated with the auction.
   * @param {Object[]} auction.bids - Array of bids placed on the auction.
   * @param {number} auction.bids[].amount - The amount of the bid.
   */
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
  /**
   * Generates the HTML representation of the auction card.
   *
   * @returns {string} The HTML representation of the auction card.
   */
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
  /**
   * Generates the footer of the auction card which contains action buttons.
   *
   * @returns {string} The HTML of the footer.
   */
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

  /**
   * Determines the action buttons (CTA) for the auction based on the user's relation to the auction.
   *
   * @returns {string} The HTML of the CTA (either 'Bid' or 'Delete' button).
   */
  cta() {
    const user = JSON.parse(load("user"));
    if (this.seller === user.name) {
      return `<button
            class="btn-secondary costum-botton nav-link"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#delItem"
            data-id=${this.id}
            id = "delItemBtn">
            
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
  /**
   * Gets the amount of the last bid placed on the auction.
   *
   * @returns {number} The amount of the last bid.
   */
  getLastBid() {
    let lastBid = 0;
    if (this.bids) {
      if (this.bids.length > 0) {
        lastBid = this.bids[this.bids.length - 1].amount;
      } else lastBid = 0;
    }
    return lastBid;
  }
  /**
   * Converts the provided endsAt date to a formatted string.
   *
   * @param {string} endsAt - The date-time string of when the auction ends.
   * @returns {string} The formatted date and time string.
   */
  date(endsAt) {
    const dataObject = new Date(endsAt);
    const date =
      dataObject.toLocaleDateString() + " " + dataObject.toLocaleTimeString();
    return date;
  }
}
