import { updateProfile } from "../../api/profile/updateprofile.js";
import * as localStore from "../../lokalstore/index.js";
import { removeOverlay } from "../../helpers/removeoverlay.js";
import displayMessage from "../../ui/common/displaymessage.js";
import { updateButtonState } from "../../helpers/disabledbutton.js";

export async function updateProfileListener() {
  const btn = document.querySelector("#updateProfileBtn");
  const message = document.querySelector("#modalMsg");
  const avatarUrl = document.querySelector("#updateAvatar");

  updateButtonState(btn, avatarUrl);

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
