import { PROFILE_URL } from "../constants.js";
import { getHeader } from "../../helpers/header.js";

export async function getBids(name) {
  const URL = `${PROFILE_URL}/${name}/bids?_listings=true`;
  const options = {
    headers: getHeader(),
    method: "GET",
  };

  const respons = await fetch(URL, options);
  const json = await respons.json();
  if (respons.ok) {
    return json;
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
