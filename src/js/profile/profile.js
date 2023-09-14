export function loadProfile() {
  const profileDesktop = document.querySelector("#profileDesktop");
  const profileMobile = document.querySelector("#profileMobile");
  const profileHTML = `
                    <div class="container-fluid">
                    <div class="row">
                    <div class="card p-0 profile-card ">
                        <h3 id="profile-name" class="ms-4 mt-4 mb-2">TestUser</h3>
                        <div class="ms-4 me-4 d-flex justify-content-center">
                        <img src="/madia/images/avatar.jpeg" alt="" class="card-img-top" id="profile-img">
                        </div>
                        <div class="ms-4 mt-4 mb-2">credits: 1000</div>
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
                            <button class="btn-tertiary active costum-botton profile-btn btn-link nav-link w-100">All Itmes</button>
                            <button class="btn-tertiary costum-botton profile-btn btn-link nav-link w-100 mt-2">Your Items</button>
                            <button class="btn-tertiary costum-botton profile-btn btn-link nav-link w-100 mt-2">Your Bids</button>
                        </div>
                    </div>
                    </div>
                    </div>
                    `;
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991) {
      profileDesktop.innerHTML = profileHTML;
      profileDesktop.style.maxWidth = "250px";
      profileMobile.innerHTML = "";
    } else {
      profileMobile.innerHTML = profileHTML;
      profileDesktop.innerHTML = "";
    }
  });
  if (window.innerWidth > 991) {
    profileDesktop.innerHTML = profileHTML;
    profileDesktop.style.maxWidth = "250px";
    profileMobile.innerHTML = "";
  } else {
    profileMobile.innerHTML = profileHTML;
    profileDesktop.innerHTML = "";
  }
}
