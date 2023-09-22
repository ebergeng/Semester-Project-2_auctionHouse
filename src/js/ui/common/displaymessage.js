export default function displayMessage(type, message, target) {
  target.innerHTML = `
        <div class="alert alert-${type}">
         ${message}
        </div>
    `;
}
