import { PROFILE_URL } from "../constants.js";
import { getHeader } from "../headers.js";

export async function getCredits(name) {
  const URL = `${PROFILE_URL}/${name}/credits`;
  const options = {
    headers: getHeader(),
    method: "GET",
  };

  const respons = await fetch(URL, options);
  const json = await respons.json();
  if (!respons.ok) {
    const errorMessage = json.errors[0].errorMessage;
    throw new Error(errorMessage);
  }

  return json;
}
