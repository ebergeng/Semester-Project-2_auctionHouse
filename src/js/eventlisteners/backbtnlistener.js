import { removeOverlay } from "../helpers/removeoverlay.js";

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
