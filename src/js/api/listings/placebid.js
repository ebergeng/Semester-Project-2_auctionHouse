import { BID_URL } from "../constantsjs";
import { getHeader } from "../headers";

export async function placeBid(id, bid) {
  const URL = `${BID_URL}/${id}/bids`;
  const options = {
    headers: getHeader(),
    method: "POST",
    body: JSON.stringify(bid),
  };

  const respons = await fetch(URL, options);
  const json = await respons.json();
  if (respons.ok) {
    return json;
  } else {
    console.log(json.errors[0].errorMessage);
    throw new Error("there was an error conncting to the API");
  }
}
