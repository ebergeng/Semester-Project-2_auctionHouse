export function updateButtonState(button, input) {
  function update() {
    if (input.value.trim() === "") {
      button.classList.add("disabled");
      button.disabled = true;
    } else {
      button.classList.remove("disabled");
      button.disabled = false;
    }
  }

  update();
  input.addEventListener("input", update);
}
