import { load } from "./localstoreload.js";

export async function setLocalStoreCredits(credits) {
  let user = load("user");
  user = JSON.parse(user);
  user.credits = credits;
  let upDateUser = JSON.stringify(user);
  localStorage.setItem("user", upDateUser);
  console.log("hey");
}
