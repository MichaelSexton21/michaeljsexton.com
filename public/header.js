document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
      setupNavbar();
    });

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});

function setupNavbar() {
  document.querySelectorAll(".navbar-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      let anchor = event.target.closest("a");
      let targetId = anchor ? anchor.getAttribute("href") : null;

      if (targetId && window.location.href.includes(targetId)) {
        // If already on the page with the target ID, prevent scrolling
      } else {
        window.location.href = "index.html#" + targetId;
      }
    });
  });
}
