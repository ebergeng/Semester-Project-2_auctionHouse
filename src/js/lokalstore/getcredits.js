import { load } from "./localstoreload.js";

export async function getLocalStoreCredits() {
  const data = await JSON.parse(load("user"));
  return data?.credits;
}
