import { login } from "../../api/auth/login.js";
import { storeLogin } from "../../api/lokalstore.js";
import { removeOverlay } from "../../helpers/removeoverlay.js";
import displayMessage from "../../ui/common/displaymessage.js";

export async function loginFormListener() {
  const form = document.querySelector("#loginModal");
  form.innerHTML;

  form.addEventListener("submit", async (event) => {
    console.log("hey");
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    form.querySelector("fieldset").disabled = true;
    form.querySelector(
      "button[type='submit']",
    ).innerHTML = `<div class="spinner-border" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                              </div>`;

    try {
      const { accessToken, ...user } = await login(profile);
      storeLogin(accessToken, user);
      removeOverlay("loginModal");
      location.href = "/listings";
    } catch (err) {
      console.log(err);
      const message = form.querySelector(".message");
      displayMessage("danger", err, message);
    } finally {
      form.querySelector("fieldset").disabled = false;
      form.querySelector("button[type='submit']").innerHTML = "Login";
    }
  });
}
