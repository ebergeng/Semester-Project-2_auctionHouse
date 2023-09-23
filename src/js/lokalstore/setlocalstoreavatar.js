import { load } from "./localstoreload.js";

export async function setLocalStoreAvatar(avatar) {
  let user = load("user");
  user = JSON.parse(user);
  user.avatar = avatar;
  let upDateUser = JSON.stringify(user);
  localStorage.setItem("user", upDateUser);
}
