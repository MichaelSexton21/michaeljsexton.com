function setupNavbar() {
  document.querySelectorAll(".navbar-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href");

      if (targetId == "index.html") {
        window.location.href = targetId;
      } else {
        window.location.href = "content.html#" + targetId;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", setupNavbar);
