export function mobileView() {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      return false;
    } else {
      return true;
    }
  });
}
