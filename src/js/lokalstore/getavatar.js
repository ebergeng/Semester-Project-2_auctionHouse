import { load } from "./localstoreload.js";

export async function getLocalStoreAvatar() {
  const data = await JSON.parse(load("user"));
  return data?.avatar;
}
