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
