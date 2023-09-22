import { REG_URL } from "../constants.js";

export async function register(profile) {
  const options = {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(profile),
  };

  const respons = await fetch(REG_URL, options);
  const json = await respons.json();

  if (!respons.ok) {
    const errorMessage = json.errors[0].message;
    throw new Error(errorMessage);
  }

  return json;
}
