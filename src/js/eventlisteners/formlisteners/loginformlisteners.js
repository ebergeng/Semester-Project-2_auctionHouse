import { login } from "../../api/auth/login.js";
import { storeLogin } from "../../api/lokalstore.js";
import { removeOverlay } from "../../helpers/removeoverlay.js";
import displayMessage from "../../ui/common/displaymessage.js";

/**
 * Attaches an event listener to the 'loginModal' form for user login.
 *
 * This function:
 * - Listens for the form's submit event, preventing its default behavior.
 * - Collects user data from the form.
 * - Disables the form and displays a loading spinner during the login attempt.
 * - Calls the 'login' function with the user's data and, if successful, stores the user's login token and details.
 * - Redirects the user to the listings page upon successful login.
 * - Displays an error message on the form if the login attempt fails.
 * - Reactivates the form and resets the submit button after the login attempt (whether successful or not).
 *
 * @function
 * @async
 */
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
