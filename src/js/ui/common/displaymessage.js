/**
 * Displays a message as an alert within the specified target element.
 *
 * @function
 * @param {string} type - The type of the alert, e.g., 'danger', 'success', 'info', etc.
 * @param {string} message - The message to be displayed inside the alert.
 * @param {HTMLElement} target - The DOM element where the alert should be displayed.
 */
export default function displayMessage(type, message, target) {
  target.innerHTML = `
        <div class="alert alert-${type}">
         ${message}
        </div>
    `;
}
