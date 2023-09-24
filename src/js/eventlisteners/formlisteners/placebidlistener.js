import { load } from "../../api/lokalstore.js";
import { getListing } from "../../api/listing/getlisting.js";
import { placeBid } from "../../api/listing/placebid.js";
import * as loader from "../../ui/common/loader/index.js";
import displayMessage from "../../ui/common/displaymessage.js";
import { getCredits } from "../../api/profile/getcredits.js";
import * as localStore from "../../lokalstore/index.js";

/**
 * Attaches an event listener to the 'placeBid' modal for placing a bid on an auction item.
 *
 * This function:
 * - Listens for the 'show.bs.modal' event on the 'placeBid' modal.
 * - Retrieves the auction item's ID and fetches its current details.
 * - Sets the minimum bid amount based on the last placed bid or 1 if no bids exist.
 * - Adjusts bid input fields based on available user credits and current bid amounts.
 * - Links range input and number input fields to reflect changes in bid amount.
 * - Attaches a click event to the 'placeBidBtn' button to handle the bid submission.
 * - Displays a loading spinner during the bid attempt.
 * - On successful bid, displays a success message and updates user credits.
 * - Displays an error message in the modal if the bid attempt fails.
 *
 * @function
 * @async
 */
export async function placeBidListener() {
  const modal = document.querySelector("#placeBid");
  const placeBidBtn = document.querySelector("#placeBidBtn");
  const backBtn = modal.querySelector("#backBtn");

  modal.addEventListener("show.bs.modal", async function (event) {
    const button = event.relatedTarget;
    const id = button.getAttribute("data-id");
    const auctions = await getListing(id);
    //currentListing = auctions

    const user = JSON.parse(load("user"));
    let minBid;
    try {
      minBid = auctions.bids[auctions.bids.length - 1].amount + 1;
    } catch {
      minBid = 1;
    }

    const maxBid = user.credits;

    const numberInput = document.querySelector('input[type="number"]');
    numberInput.value = minBid;
    numberInput.min = minBid;
    numberInput.max = maxBid;
    numberInput.id = id;

    numberInput.addEventListener("input", function () {
      rangeInput.value = numberInput.value;
    });

    const rangeInput = document.querySelector('input[type="range"]');
    rangeInput.value = minBid;
    rangeInput.min = minBid;
    rangeInput.max = maxBid;
    rangeInput.addEventListener("input", function () {
      numberInput.value = rangeInput.value;
    });
  });
  placeBidBtn.addEventListener("click", async () => {
    const msg = modal.querySelector(".msg");
    const fieldset = modal.querySelector("fieldset");
    const input = document.querySelector('input[type="number"]');
    msg.append(loader.bigLoader());
    try {
      fieldset.classList.add("d-none");
      await placeBid(input.id, parseInt(input.value));
      displayMessage("success", "Bid placed successfuly!", msg);
      backBtn.classList.remove("d-none");
      placeBidBtn.classList.add("d-none");
      localStore.setLocalStoreCredits(
        await getCredits(await localStore.getLocalStoreName()),
      );
    } catch (err) {
      console.log(err);
      displayMessage("danger", err, modal);
    }
  });
}
