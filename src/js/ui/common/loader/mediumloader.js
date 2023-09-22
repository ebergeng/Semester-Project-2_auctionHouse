export function mediumLoader() {
  const loader = document.createElement("div");
  loader.classList.add("spinner-border");
  loader.role = "status";
  loader.style.width = "2rem";
  loader.style.height = "2rem";
  return loader;
}
