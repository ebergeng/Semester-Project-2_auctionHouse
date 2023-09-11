import { LOGIN_URL } from "../constants.js";

export async function login(profile) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(profile),
  };

  const respons = await fetch(LOGIN_URL, options);
  const json = await respons.json();

  if (!respons.ok) {
    const errorMessage = json.errors[0].errorMessage;
    throw new Error(errorMessage);
  }

  return json;
}
