document.addEventListener("DOMContentLoaded", function () {
  mfgRevealAnimation();
  mfgSmoothScroll();
});

function mfgRevealAnimation() {
  const revealItems = document.querySelectorAll(".mfg-reveal");

  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("mfg-show");
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

function mfgSmoothScroll() {
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