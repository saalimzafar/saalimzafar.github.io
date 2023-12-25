document.addEventListener("DOMContentLoaded", function () {
  const leftPanel = document.getElementById("leftPanel");
  const toggleBtn = document.getElementById("toggleBtn");

  toggleBtn.addEventListener("click", function () {
    leftPanel.classList.toggle("hide-panel");
  });
});
