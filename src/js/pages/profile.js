import * as localStore from "../lokalstore/index.js";

export async function profilePage() {
  const profileContainer = document.querySelector("#profileContainer");

  profileContainer.querySelector("#profileName").innerHTML =
    await localStore.getLocalStoreName();
  profileContainer.querySelector("#profileEmail").innerHTML =
    await localStore.getLocalStoreEmail();
  profileContainer.querySelector("#profileImg").src =
    await localStore.getLocalStoreAvatar();
  profileContainer.querySelector(
    "#profileCredits",
  ).innerHTML = `${await localStore.getLocalStoreCredits()},-`;
}
