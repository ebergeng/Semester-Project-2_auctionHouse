/**
 * Attaches event listeners to all elements with the class "log-out-button".
 * When any of these elements are clicked, the function will:
 * 1. Remove the "token" and "user" items from localStorage.
 * 2. Reload the current page.
 *
 * @function
 */
export function logOutButtonListener() {
  const logOutBtn = document.querySelectorAll(".log-out-button");
  logOutBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      location.reload();
    });
  });
}
