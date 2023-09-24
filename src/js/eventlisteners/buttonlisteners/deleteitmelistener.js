import { deleteListing } from "../../api/listing/deletelisting.js";
import { removeOverlay } from "../../helpers/removeoverlay.js";
import displayMessage from "../../ui/common/displaymessage.js";

/**
 * Attaches an event listener to the delete item modal.
 * When the modal is shown, it captures the data-id attribute from the event's related target.
 * Upon clicking the confirm button within the modal, it attempts to delete the listing with the captured id.
 * After successful deletion, the modal overlay is removed, and the page is reloaded.
 * If an error occurs, the error message is displayed within the modal's body.
 *
 * @function
 * @async
 */
export async function deleteItemListener() {
  const modal = document.querySelector("#delItem");
  const modalBody = modal.querySelector(".modal-body");
  modal.addEventListener("show.bs.modal", async function (event) {
    let id = event.relatedTarget;
    id = id.getAttribute("data-id");

    const confirmBtn = document.querySelector("#confirmBtn");
    confirmBtn.addEventListener("click", async () => {
      console.log(id);
      try {
        await deleteListing(id);
        removeOverlay("delItem");
        location.reload();
      } catch (err) {
        console.log(err);
        displayMessage("danger", err, modalBody);
      }
    });
    //const auction = await getListing(id);
    console.log(id);
  });
}
