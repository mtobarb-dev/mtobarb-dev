const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

toggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") return;
  header.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
});

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();
