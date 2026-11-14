// Show an indicator's chart in the page's dialog (templates/chart_dialog.html) instead of leaving the page;
// Esc, the close button or a click outside closes it.
// A link with data-detail also shows a checkbox, labelled data-detail-label, switching to that chart and back;
// data-detail-style places it over the chart, below its legend.
const chartDialog = document.getElementById("chart-dialog");
const chartImage = chartDialog.querySelector("img");
const detailToggle = chartDialog.querySelector(".chart-detail");
const detailBox = detailToggle.querySelector("input");
let openedLink = null;
for (const link of document.querySelectorAll("a.chart-link")) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openedLink = link;
    chartImage.src = link.href;
    chartImage.alt = `Chart of ${link.textContent}`;
    detailToggle.hidden = !link.dataset.detail;
    detailBox.checked = false;
    detailToggle.querySelector("span").textContent = link.dataset.detailLabel || "";
    detailToggle.style.cssText = link.dataset.detailStyle || "";
    chartDialog.showModal();
  });
}
detailBox.addEventListener("change", () => {
  chartImage.src = detailBox.checked ? openedLink.dataset.detail : openedLink.href;
});
chartDialog.addEventListener("click", (event) => { if (event.target === chartDialog) chartDialog.close(); });
