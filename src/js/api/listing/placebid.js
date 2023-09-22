import { LISTINGS_URL } from "../constants.js";
import { getHeader } from "../../helpers/header.js";

export async function placeBid(id, amount) {
  const URL = `${LISTINGS_URL}/${id}/bids`;
  console.log(URL);
  const body = {
    amount: amount,
  };

  const options = {
    headers: getHeader(),
    method: "POST",
    body: JSON.stringify(body),
  };

  const respons = await fetch(URL, options);
  const json = await respons.json();
  if (respons.ok) {
    return json;
  } else {
    throw new Error("there was an error conncting to the API");
  }
}
