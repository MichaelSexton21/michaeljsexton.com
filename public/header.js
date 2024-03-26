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

document.addEventListener("DOMContentLoaded", function () {
  function changeFavicon() {
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const faviconImage = document.getElementById("navbar-favicon");
    if (faviconImage) {
      faviconImage.src =
        theme === "dark"
          ? "assets/favicon_white.ico"
          : "assets/favicon_black.ico";
    } else {
      console.error('Element with id "navbar-favicon" not found.');
    }
  }

  setTimeout(() => {
    changeFavicon();
  }, 500);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", changeFavicon);
});

// Initial favicon setup based on user's preferred theme
const userPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
changeFavicon(userPrefersDark ? "dark" : "light");

// Listener for theme change
window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
  changeFavicon(e.matches ? "dark" : "light");
});
