import { backBtnListener } from "../eventlisteners/backbtnlistener.js";
import * as formListeners from "../eventlisteners/formlisteners/index.js";
import * as buttonListener from "../eventlisteners/buttonlisteners/deleteitmelistener.js";
import { viewBidListener } from "../eventlisteners/viewbidlistener.js";

export function listingsPage() {
  buttonListener.deleteItemListener();
  formListeners.placeBidListener();
  viewBidListener();
  backBtnListener();
}
