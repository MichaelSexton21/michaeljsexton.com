function setupBurgerMenu() {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
      setupNavbar();
      setupBurgerMenu();
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
