import { login } from "../api/auth/login.js";
import { storeLogin } from "../api/lokalstore.js";
import { removeOverlay } from "../helpers/removeoverlay.js";

export async function loginFormListener() {
  const form = document.querySelector("#loginModal");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    try {
      const { accessToken, ...user } = await login(profile);
      storeLogin(accessToken, user);
      removeOverlay("loginModal");
      location.reload();
    } catch (err) {
      console.log(err);
    }
  });
}
