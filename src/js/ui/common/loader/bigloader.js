export function bigLoader() {
  const loader = document.createElement("div");
  loader.classList.add("spinner-border");
  loader.role = "status";
  loader.style.width = "5rem";
  loader.style.height = "5rem";
  return loader;
}
