/**
 * Generates and appends a list of bids for a given listing to the `.bids-data` container.
 *
 * The function clears any existing content within the `.bids-data` container and populates
 * it with rows of bid data, including a count, the bidder's name, and the bid amount.
 *
 * @param {Object} listing - The listing object containing the array of bids.
 * @param {Array} listing.bids - An array of bid objects.
 * @param {string} listing.bids[].bidderName - The name of the individual who placed the bid.
 * @param {number} listing.bids[].amount - The bid amount.
 * @returns {void}
 */
export function buildBidsList(listing) {
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
