document.addEventListener("DOMContentLoaded", function () {
  crxRevealAnimation();
  crxRoleFilter();
  crxSmoothScroll();
});

function crxRevealAnimation() {
  const revealItems = document.querySelectorAll(".crx-reveal");

  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("crx-show");
        }
      });
    },
    {
      threshold: 0.14
    }
  );

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
}

function crxRoleFilter() {
  const buttons = document.querySelectorAll(".crx-role-btn");
  const cards = document.querySelectorAll(".crx-role-card");

  if (!buttons.length || !cards.length) return;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const filterValue = button.getAttribute("data-role-filter");

      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      cards.forEach(function (card) {
        const category = card.getAttribute("data-role-category");

        if (filterValue === "all" || category === filterValue) {
          card.classList.remove("crx-hide");
        } else {
          card.classList.add("crx-hide");
        }
      });
    });
  });
}

function crxSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      const offset = 90;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: top,
        behavior: "smooth"
      });
    });
  });
}