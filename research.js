/* manufacturing-research.js */
document.addEventListener("DOMContentLoaded", function () {
  mrxRevealAnimation();
  mrxParallaxEffect();
});

function mrxRevealAnimation() {
  const revealItems = document.querySelectorAll(".mrx-reveal");

  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("mrx-show");
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
}

function mrxParallaxEffect() {
  const sections = document.querySelectorAll(".mrx-parallax-section");

  if (!sections.length) return;

  function moveParallax() {
    sections.forEach(function (section) {
      const bg = section.querySelector(".mrx-parallax-bg");

      if (!bg) return;

      const speed = Number(bg.getAttribute("data-speed")) || 10;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom < 0 || rect.top > windowHeight) return;

      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const move = (progress - 0.5) * speed * 10;

      bg.style.transform = "translate3d(0, " + move + "px, 0) scale(1.08)";
    });

    requestAnimationFrame(moveParallax);
  }

  requestAnimationFrame(moveParallax);
}