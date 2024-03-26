function loadContent() {
  const page = window.location.hash.substr(1) || "timeline"; // Default if no hash
  if (page === "timeline") {
    const index_file = "pages/" + page + ".html";

    fetch(index_file)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(
          "page-content"
        ).innerHTML = `<section class="section"><div class="content ">${data}</div></section>`;
      });
  } else {
    const markdownFile = "pages/" + page + ".md";
    fetch(markdownFile)
      .then((response) => response.text())
      .then((text) => {
        const data = marked.parse(text);
        document.getElementById(
          "page-content"
        ).innerHTML = `<section class="section"><div class="content ">${data}</div></section>`;
      });
  }
}

// Load content when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadContent);

// Load new content when URL hash changes
window.addEventListener("hashchange", loadContent);

document.addEventListener("DOMContentLoaded", function () {
  function changeFavicon() {
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const faviconTitle = document.getElementById("title-favicon");
    if (faviconTitle) {
      faviconTitle.href =
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
