/**
 * Retrieves the value associated with the specified key from local storage.
 *
 * @param {string} item - The key whose associated value is to be retrieved.
 * @returns {string|null} The value associated with the key, or null if the key does not exist.
 */
export function load(item) {
  return localStorage.getItem(item);
}
