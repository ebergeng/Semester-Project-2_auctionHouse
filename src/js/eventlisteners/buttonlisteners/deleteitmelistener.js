import { deleteListing } from "../../api/listing/deletelisting.js";
import { removeOverlay } from "../../helpers/removeoverlay.js";
import displayMessage from "../../ui/common/displaymessage.js";

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
