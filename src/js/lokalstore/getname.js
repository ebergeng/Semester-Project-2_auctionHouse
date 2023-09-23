import { load } from "./localstoreload.js";

export async function getLocalStoreName() {
  const data = await JSON.parse(load("user"));
  return data?.name;
}
