import { updateButtonState } from "../../helpers/disabledbutton.js";
import { createListing } from "../../api/listing/createlisting.js";
import { removeOverlay } from "../../helpers/removeoverlay.js";

/**
 * Attaches an event listener to the 'listNewItem' form for creating a new listing.
 * It validates input fields and sends the form data to create a new listing.
 *
 * - The title and endsAt fields are validated for non-emptiness before enabling the submission button.
 * - The form's submission is prevented from its default action, and the data is sent to the API to create a listing.
 * - Tags and media inputs are transformed from comma-separated strings to arrays.
 * - Upon successful creation, the related modal overlay is removed and the page is reloaded.
 * - Errors during the creation process are logged to the console.
 *
 * @function
 */
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
