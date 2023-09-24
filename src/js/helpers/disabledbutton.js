export function updateButtonState(button, inputs) {
  function update() {
    let allFilled = true;
    for (let input of inputs) {
      if (input.value.trim() === "") {
        allFilled = false;
        break; // If any one of them is empty, break out of the loop
      }
    }

    if (allFilled) {
      button.classList.remove("disabled");
      button.disabled = false;
    } else {
      button.classList.add("disabled");
      button.disabled = true;
    }
  }

  update();

  // Attach the update function to the 'input' event for all input elements
  inputs.forEach((input) => {
    input.addEventListener("input", update);
  });
}
