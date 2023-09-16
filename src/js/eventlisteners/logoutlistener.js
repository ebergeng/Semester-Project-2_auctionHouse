export function logOut() {
  const logOutBtn = document.querySelector("#logOutButton");

  logOutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    location.reload();
  });
}
