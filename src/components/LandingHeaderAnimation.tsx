export default function NavbarAnimation() {
  const listItem = document.querySelectorAll("#landing-header li");
  const menuBackDrop = document.querySelector("#menu-backdrop") as HTMLElement;

  listItem.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const { left, top, width, height } = item.getBoundingClientRect();

      menuBackDrop.style.setProperty("--left", `${left}px`);
      menuBackDrop.style.setProperty("--top", `${top}px`);
      menuBackDrop.style.setProperty("--width", `${width}px`);
      menuBackDrop.style.setProperty("--height", `${height}px`);

      menuBackDrop.style.opacity = "1";
      menuBackDrop.style.visibility = "visible";
    });

    item.addEventListener("mouseleave", () => {
      menuBackDrop.style.opacity = "0";
      menuBackDrop.style.visibility = "hidden";
    });
  });
}
