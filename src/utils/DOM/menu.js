export function handleNav() {
  const nav = document.querySelector(".navlinks");
  let open = nav.getAttribute("aria-expanded");
  open === "true"
    ? nav.setAttribute("aria-expanded", "false")
    : nav.setAttribute("aria-expanded", "true");
}
