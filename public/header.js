document.addEventListener("DOMContentLoaded", () => {
  // Load the header content
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
      setupNavbar();
    });

  // Load the footer content
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
      const targetId = event.target.getAttribute("href");

      console.log("targetId", targetId);
      if (targetId === "index.html") {
        window.location.href = targetId;
      } else {
        window.location.href = "content.html#" + targetId;
      }
    });
  });
}

setupNavbar(); // Call setupNavbar directly
