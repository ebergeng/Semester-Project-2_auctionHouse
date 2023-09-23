import { load } from "./localstoreload.js";

export async function getLocalStoreEmail() {
  const data = await JSON.parse(load("user"));
  return data?.email;
}
