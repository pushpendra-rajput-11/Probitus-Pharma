/* manufacturing.js */
document.addEventListener("DOMContentLoaded", function () {
  mpgRevealAnimation();
  mpgSmoothScroll();
});

function mpgRevealAnimation() {
  const revealItems = document.querySelectorAll(".mpg-reveal");

  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("mpg-show");
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

function mpgSmoothScroll() {
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