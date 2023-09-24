import { updateProfile } from "../../api/profile/updateprofile.js";
import * as localStore from "../../lokalstore/index.js";
import { removeOverlay } from "../../helpers/removeoverlay.js";
import displayMessage from "../../ui/common/displaymessage.js";
import { updateButtonState } from "../../helpers/disabledbutton.js";

/**
 * Attaches an event listener to the profile update button to handle profile updating.
 *
 * This function:
 * - Updates the button's state based on the presence of a valid avatar URL in the input field.
 * - Listens for a click event on the update profile button ('updateProfileBtn').
 * - Extracts the avatar URL from the input field ('updateAvatar').
 * - Temporarily disables the button during the profile update process.
 * - Calls an `updateProfile` function with the extracted avatar URL to attempt to update the user's profile.
 * - On successful profile update:
 *   - Stores the new avatar URL locally using the `localStore.setLocalStoreAvatar` function.
 *   - Closes the update profile modal (`updateProfileModal`).
 *   - Reloads the current page.
 * - Displays an error message if the profile update fails.
 *
 * @function
 * @async
 */
export async function updateProfileListener() {
  const btn = document.querySelector("#updateProfileBtn");
  const message = document.querySelector("#modalMsg");
  const avatarUrl = document.querySelector("#updateAvatar");

  updateButtonState(btn, [avatarUrl]);

  btn.addEventListener("click", async (event) => {
    event.preventDefault();
    const avatar = document.querySelector("#updateAvatar").value;
    try {
      await updateProfile(avatar);
      await localStore.setLocalStoreAvatar(avatar);
      removeOverlay("updateProfileModal");
      location.reload();
    } catch (err) {
      console.log(err);
      message.classList.remove("d-none");

      displayMessage("danger", err, message);
    }
  });
}
