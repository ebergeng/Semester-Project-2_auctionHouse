import { load } from "../api/lokalstore.js";

/**
 * Updates the state (enabled/disabled) of a button based on the presence of values in specified input elements.
 * If all inputs have values, the button is enabled. Otherwise, it remains disabled.
 *
 * @function
 * @param {HTMLButtonElement} button - The button element to update.
 * @param {HTMLInputElement[]} inputs - An array of input elements to monitor for value changes.
 */

export function getHeader() {
  const token = load("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}}`,
  };
}
