import { updateButtonState } from "../../helpers/disabledbutton.js";
import { createListing } from "../../api/listing/createlisting.js";
import { removeOverlay } from "../../helpers/removeoverlay.js";

export async function addNewItemListener() {
  const form = document.querySelector("#listNewItem");
  const title = document.querySelector("#modalTitle");
  const endsAt = form.querySelector("#endsAt");
  const btn = form.querySelector("#addItem");

  updateButtonState(btn, [title, endsAt]);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());

    let tagsString = body.tags;
    body.tags = tagsString.split(",").map((tag) => tag.trim());
    let mediaString = body.media;
    body.media = mediaString.split(",").map((media) => media.trim());
    try {
      await createListing(body);
      removeOverlay("listNewItem");
      location.reload();
    } catch (err) {
      console.log(err);
    }
  });
}
