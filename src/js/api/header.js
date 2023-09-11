import { load } from "./lokalstore";

export function getHeader() {
  const token = load("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}}`,
  };
}
