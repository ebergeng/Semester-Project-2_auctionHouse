import { PROFILE_URL } from "../constants.js";
import { getHeader } from "../headers.js";
import { load } from "../../helpers/lokalstore.js";

export async function getProfileListings() {
  const profile = JSON.parse(load("user"));
  const URL = `${PROFILE_URL}/${profile.name}/listings?_bids=true`;

  const options = {
    headers: getHeader(),
    method: "GET",
  };

  const respons = await fetch(URL, options);
  const json = await respons.json();
  if (respons.ok) {
    return json;
  } else {
    //const errorMessage = json.errors[0].errorMessage;
    throw new Error("there was an error conncting to the API");
  }
}
