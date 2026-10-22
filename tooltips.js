// Column-header tooltips, copied as-is to site/tooltips.js.
// Clicking a header button toggles its popover natively (popovertarget); this adds hover:
// hovering shows the tip, leaving hides it, and clicking while hovered pins it open.
for (const button of document.querySelectorAll("button.info")) {
  const tip = document.getElementById(button.getAttribute("popovertarget"));
  button.addEventListener("mouseenter", () => {
    if (!tip.matches(":popover-open")) {
      tip.showPopover();
      tip.dataset.hover = "";
    }
  });
  button.addEventListener("mouseleave", () => {
    if ("hover" in tip.dataset) tip.hidePopover();
  });
  button.addEventListener("click", (event) => {
    if ("hover" in tip.dataset) {
      delete tip.dataset.hover;
      event.preventDefault();  // keep it open rather than toggling it closed
    }
  });
  tip.addEventListener("toggle", (event) => {
    if (event.newState === "closed") delete tip.dataset.hover;
  });
}
