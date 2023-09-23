import { checkLoginStatus } from "../helpers/checkloginstatus.js";

export async function createMenu(path) {
  const menuContainer = document.querySelector("#navMenu");

  if (await checkLoginStatus()) {
    menuContainer.innerHTML = ` <li class="nav-item">
                                        <a class="nav-link ${
                                          path === "/listings/" ? "active" : ""
                                        }" aria-current="page" href="/listings/">Listings</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link ${
                                          path === "/profile/" ? "active" : ""
                                        }" href="/profile/">Profile</a>
                                    </li>`;
  } else {
    menuContainer.innerHTML = `<li class="nav-item">
                                        <button
                                        class="btn-primary costum-botton btn-link nav-link w-100"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#loginModal"
                                        >
                                        Login
                                        </button>
                                    </li>
                                    <li class="nav-item">
                                        <button
                                        class="btn-secondary costum-botton btn-link nav-link w-100"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#signupModal"
                                        >
                                        Sign Up
                                        </button>`;
  }
}
