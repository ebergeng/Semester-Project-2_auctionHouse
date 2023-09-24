import { removeOverlay } from "../helpers/removeoverlay.js";

/**
 * Attaches an event listener to the back button inside the place bid modal.
 *
 * This function:
 * - Selects the back button element with the ID 'backBtn' from the DOM.
 * - Listens for a click event on the back button.
 * - Upon click:
 *   - Displays the fieldset element within the place bid modal (`placeBid`).
 *   - Hides the back button itself.
 *   - Makes the 'placeBidBtn' button visible again.
 *   - Closes the 'placeBid' modal using the `removeOverlay` function.
 *   - Reloads the current page to reflect any changes.
 *
 * @function
 */
export function backBtnListener() {
  const btn = document.querySelector("#backBtn");
  const modal = document.querySelector("#placeBid");
  btn.addEventListener("click", () => {
    modal.querySelector("fieldset").classList.remove("d-none");
    btn.classList.add("d-none");
    modal.querySelector("#placeBidBtn").classList.remove("d-none");
    removeOverlay("placeBid");
    location.reload();
  });
}
