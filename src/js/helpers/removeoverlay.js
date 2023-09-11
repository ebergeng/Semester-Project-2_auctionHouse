export function removeOverlay(modal) {
  const form = document.querySelector(`#${modal}`);
  const overlay = document.querySelector(".modal-backdrop");
  overlay.remove();
  form.classList.remove("show");
}
