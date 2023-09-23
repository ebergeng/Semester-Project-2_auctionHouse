import * as localStore from "../lokalstore/index.js";

export async function profilePage() {
  const profileContainer = document.querySelector("#profileContainer");
  const updateProfileModal = document.querySelector("#updateProfileModal");

  const profileName = await localStore.getLocalStoreName();
  const profileEmail = await localStore.getLocalStoreEmail();
  const profileAvater = await localStore.getLocalStoreAvatar();
  const profileCredits = await localStore.getLocalStoreCredits();

  profileContainer.querySelector("#profileName").innerHTML = profileName;
  profileContainer.querySelector("#profileEmail").innerHTML = profileEmail;
  profileContainer.querySelector("#profileImg").src = profileAvater;
  profileContainer.querySelector(
    "#profileCredits",
  ).innerHTML = `${profileCredits},-`;

  updateProfileModal.querySelector("#modalName").value = profileName;
  updateProfileModal.querySelector("#modalEmail").value = profileEmail;
}
