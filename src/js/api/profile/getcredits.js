import { PROFILE_URL } from "../constants.js";
import { getHeader } from "../../helpers/header.js";

export async function getCredits(name) {
  const URL = `${PROFILE_URL}/${name}/credits`;

  const options = {
    headers: getHeader(),
    method: "GET",
  };

  const respons = await fetch(URL, options);
  const json = await respons.json();

  if (respons.ok) {
    return json.credits;
  } else {
    if (json.statusCode === 404) {
      throw new Error(
        "Sorry, we encountered an issue connecting to our service. Please try again later.",
      );
    } else {
      throw new Error(json.errors[0].message);
    }
  }
}
