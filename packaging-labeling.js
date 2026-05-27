document.addEventListener("DOMContentLoaded", function () {
  pklRevealAnimation();
  pklTabs();
  pklSmoothScroll();
});

function pklRevealAnimation() {
  const revealItems = document.querySelectorAll(".pkl-reveal");

  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("pkl-show");
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

function pklTabs() {
  const tabButtons = document.querySelectorAll(".pkl-tab-btn");
  const tabPanels = document.querySelectorAll(".pkl-tab-panel");

  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const targetTab = button.getAttribute("data-pack-tab");

      tabButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      tabPanels.forEach(function (panel) {
        panel.classList.remove("active");
      });

      button.classList.add("active");

      const activePanel = document.querySelector('[data-pack-panel="' + targetTab + '"]');

      if (activePanel) {
        activePanel.classList.add("active");
      }
    });
  });
}

function pklSmoothScroll() {
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