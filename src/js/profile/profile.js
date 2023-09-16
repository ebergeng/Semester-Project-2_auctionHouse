import { load } from "../helpers/lokalstore.js";

export function loadProfile() {
  const user = JSON.parse(load("user"));
  const profileDesktop = document.querySelector("#profileDesktop");
  const profileMobile = document.querySelector("#profileMobile");
  const profileHTML = `
                    <div class="container-fluid profile">
                    <div class="row">
                    <div class="card p-0 profile-card ">
                        <h3 id="profile-name" class="ms-4 mt-4 mb-2">${user.name}</h3>
                        <div class="ms-4 me-4 d-flex justify-content-center">
                        <img src="${user.avatar}" alt="profile img for ${user.name}" class="card-img-top" id="profile-img">
                        </div>
                        <div class="ms-4 mt-4 mb-2">credits: ${user.credits}</div>
                        <div class="cta-box mb-4 ">
                            <button class="btn-primary costum-botton profile-btn btn-link nav-link w-100">
                                Add Credits
                                <span class="plus-icon">+</span>
                            </button>
                            <button class="btn-secondary costum-botton profile-btn btn-link nav-link w-100 mt-2">
                                List New Item
                                <span class="plus-icon">+</span>
                            </button>
                        </div>
                        <div class="page-menu mt-4 mb-5">
                            <button class="btn-tertiary active costum-botton profile-btn btn-link nav-link w-100" id="allItems">All Itmes</button>
                            <button class="btn-tertiary costum-botton profile-btn btn-link nav-link w-100 mt-2" id="yourItems">Your Items</button>
                            <button class="btn-tertiary costum-botton profile-btn btn-link nav-link w-100 mt-2" id="yourBids">Your Bids</button>
                        </div>
                    </div>
                    </div>
                    </div>
                    `;

  const profileElement = document.createElement("div");
  profileElement.innerHTML = profileHTML;

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
