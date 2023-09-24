export function profilMenuListener() {
  const menu = document.querySelector("#profileMenu");
  const myListing = menu.querySelector("#myListingBtn");
  const myBids = menu.querySelector("#myBidsBtn");
  const newListing = menu.querySelector("#newListingBtn");

  const myListingContainer = document.querySelector("#myListingContainer");
  const myBidsContainer = document.querySelector("#myBidsContainer");

  myListing.addEventListener("click", () => {
    myBids.classList.remove("active");
    myListing.classList.add("active");

    myListingContainer.classList.remove("d-none");
    myBidsContainer.classList.add("d-none");
  });

  myBids.addEventListener("click", () => {
    myBids.classList.add("active");
    myListing.classList.remove("active");

    myListingContainer.classList.add("d-none");
    myBidsContainer.classList.remove("d-none");
  });

  newListing.addEventListener("click", () => {});
}
