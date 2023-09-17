export function loader() {
  const loader = document.createElement("div");
  loader.classList.add("loader d-flex");
  loader.innerHTML = `<div class="dot dot1 m-1"></div>
                        <div class="dot dot2 m-1"></div>
                        <div class="dot dot3 m-1"></div>`;
  return loader;
}
