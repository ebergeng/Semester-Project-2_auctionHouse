import { getHeader } from "../../helpers/header.js";
import { PROFILE_URL } from "../constants.js";
import * as localStore from "../../lokalstore/index.js";

export async function updateProfile(avatar) {
  const URL = `${PROFILE_URL}/${await localStore.getLocalStoreName()}/media`;
  const body = {
    avatar: avatar,
  };
  const options = {
    headers: getHeader(),
    method: "PUT",
    body: JSON.stringify(body),
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
