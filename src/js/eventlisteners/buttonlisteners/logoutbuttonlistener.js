export function logOutButtonListener() {
  const logOutBtn = document.querySelectorAll(".log-out-button");
  logOutBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("logging out");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      location.reload();
    });
  });
}
