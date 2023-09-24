import { register } from "../../api/auth/register.js";
import displayMessage from "../../ui/common/displaymessage.js";

/**
 * Attaches an event listener to the registration form for user registration.
 *
 * This function:
 * - Listens for the 'submit' event on the registration form ('signupModal').
 * - Extracts user registration data from the form.
 * - Temporarily disables the form and shows a loading spinner during the registration process.
 * - Calls a `register` function to attempt to register the user with the provided details.
 * - On successful registration:
 *   - Modifies the button to lead to the login modal.
 *   - Displays a success message.
 * - Displays an error message if registration fails.
 * - Resets the form button state once the process is complete.
 *
 * @function
 * @async
 */
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
      displayMessage("danger", err, message);
    } finally {
      form.querySelector("fieldset").disabled = false;
      form.querySelector("button[type='submit']").innerHTML = "Sign Up";
    }
  });
}
