import { backBtnListener } from "../eventlisteners/backbtnlistener.js";
import * as formListeners from "../eventlisteners/formlisteners/index.js";
import * as buttonListener from "../eventlisteners/buttonlisteners/deleteitmelistener.js";
import { viewBidListener } from "../eventlisteners/viewbidlistener.js";
/**
 * Initializes event listeners for the listings page.
 *
 * This function sets up various event listeners required for the functionality of the listings page,
 * including listeners for form submissions, button clicks, viewing bids, and the back button.
 */
export function listingsPage() {
  buttonListener.deleteItemListener();
  formListeners.placeBidListener();
  viewBidListener();
  backBtnListener();
}
