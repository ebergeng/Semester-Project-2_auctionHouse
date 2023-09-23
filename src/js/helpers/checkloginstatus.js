import * as localStore from "../lokalstore/index.js";

export async function checkLoginStatus() {
  const token = await localStore.getLocalStoreToken();
  if (token) {
    return true;
  } else {
    return false;
  }
}
