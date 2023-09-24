/**
 * Removes the modal overlay from the DOM and hides the specified modal.
 *
 * @function
 * @param {string} modal - The ID of the modal element to hide.
 */

export function removeOverlay(modal) {
  const form = document.querySelector(`#${modal}`);
  const overlay = document.querySelector(".modal-backdrop");
  overlay.remove();
  form.classList.remove("show");
}
