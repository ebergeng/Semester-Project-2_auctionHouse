export function load(item) {
  return localStorage.getItem(item);
}

export async function getLocalStoreEmail() {
  const data = await JSON.parse(load("user"));
  return data?.email;
}

export async function getLocalStoreName() {
  const data = await JSON.parse(load("user"));
  return data?.name;
}

export function storeLogin(token, user) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}
