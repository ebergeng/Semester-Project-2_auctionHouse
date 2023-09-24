import { LISTINGS_URL } from "../constants.js";
import { getHeader } from "../../helpers/header.js";

export async function deleteListing(id) {
  const URL = `${LISTINGS_URL}/${id}`;
  const options = {
    headers: getHeader(),
    method: "DELETE",
  };

  const respons = await fetch(URL, options);
  if (respons.ok) {
    return true;
  }

  throw new Error(respons.statusText);
}
