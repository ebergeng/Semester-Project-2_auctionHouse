import { removeOverlay } from "../helpers/removeoverlay.js";
import { register } from "../api/auth/register.js";

export function registerFormListener() {
  const form = document.querySelector("#signupModal");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    let respons;
    try {
      respons = await register(profile);
    } catch (err) {
      console.log(err);
    }

    if (respons) {
      console.log("hey");
    }

    removeOverlay("signupModal");
  });
}
