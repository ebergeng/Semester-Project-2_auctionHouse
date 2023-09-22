export default function displayMessage(type, message, container) {
  //const container = document.querySelector(target);

  container.innerHTML = `
        <div class="alert alert-${type}">
         ${message}
        </div>
    `;
}
