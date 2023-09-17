import { load } from "../helpers/lokalstore.js";

export function loadProfile() {
  const user = JSON.parse(load("user"));
  const profileDesktop = document.querySelector("#profileDesktop");
  const profileMobile = document.querySelector("#profileMobile");

  const profileElement = document.querySelector(".profileElement");
  profileElement.classList.remove("d-none");

  profileElement.querySelector("#profile-name").innerHTML = user.name;
  profileElement.querySelector("#profile-img").src = user.avatar;
  profileElement.querySelector(
    "#credits",
  ).innerHTML = `Credits: <span class="cred">${user.credits}</span>`;

  function moveProfile() {
    if (window.innerWidth > 991) {
      profileDesktop.appendChild(profileElement);
      profileDesktop.style.maxWidth = "250px";
      profileMobile.innerHTML = "";
    } else {
      profileMobile.appendChild(profileElement);
      profileDesktop.innerHTML = "";
    }
  }
  window.addEventListener("resize", moveProfile);
  moveProfile();
}
