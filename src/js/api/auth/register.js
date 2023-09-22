import { REG_URL } from "../constants.js";

export async function register(profile) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(profile),
  };

  const respons = await fetch(REG_URL, options);
  const json = await respons.json();

  if (respons.ok) {
    return json;
  } else {
    throw new Error(
      "Sorry, we encountered an issue connecting to our service. Please try again later.",
    );
  }
}
