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
