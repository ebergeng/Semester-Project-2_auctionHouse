import { checkLoginStatus } from "../helpers/checkloginstatus.js";
/**
 * Dynamically creates and appends the menu to the `#navMenu` container based on the user's login status.
 *
 * If the user is logged in, the function will append links to the Listings and Profile pages.
 * If the user is not logged in, the function will append buttons for Login and Sign Up.
 * The function also sets the 'active' class for the link corresponding to the current path.
 *
 * @async
 * @param {string} path - The current path of the page to determine which link should be marked as active.
 * @returns {void}
 */
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
