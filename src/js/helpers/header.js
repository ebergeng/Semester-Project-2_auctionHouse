import { load } from "../api/lokalstore.js";

export function getHeader() {
  const token = load("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}}`,
  };
}
