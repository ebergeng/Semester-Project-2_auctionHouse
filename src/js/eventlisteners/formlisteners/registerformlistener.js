import { register } from "../../api/auth/register.js";
import displayMessage from "../../ui/common/displaymessage.js";

export function registerFormListener() {
  const form = document.querySelector("#signupModal");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    const message = form.querySelector(".message");

    form.querySelector("fieldset").disabled = true;
    form.querySelector(
      "button[type='submit']",
    ).innerHTML = `<div class="spinner-border" role="status">
                                                                <span class="visually-hidden">Loading...</span>
                                                              </div>`;

    try {
      await register(profile);
      const btn = form.querySelector("button[type='submit']");
      btn.classList.add("btn-primary");
      btn.classList.remove("btn-secondary");
      btn.innerHTML = "Login";
      btn.setAttribute("data-bs-target", "#loginModal");
      btn.setAttribute("data-bs-toggle", "modal");
      btn.type = "button";
      displayMessage("success", "Registration successful!", message);
    } catch (err) {
      console.log(err);
      console.log(message);
      displayMessage("danger", err, message);
    } finally {
      form.querySelector("fieldset").disabled = false;
      form.querySelector("button[type='submit']").innerHTML = "Sign Up";
    }
  });
}
