/* =========================
   Header JS
========================= */

const pbMenuBtn = document.querySelector(".pb-mobile-menu-btn");
const pbSidebar = document.querySelector(".pb-mobile-sidebar");
const pbOverlay = document.querySelector(".pb-menu-overlay");
const pbCloseBtn = document.querySelector(".pb-sidebar-close");

if (pbMenuBtn && pbSidebar && pbOverlay && pbCloseBtn) {
  function openPbSidebar() {
    pbSidebar.classList.add("active");
    pbOverlay.classList.add("active");
    pbMenuBtn.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closePbSidebar() {
    pbSidebar.classList.remove("active");
    pbOverlay.classList.remove("active");
    pbMenuBtn.classList.remove("active");
    document.body.style.overflow = "";
  }

  pbMenuBtn.addEventListener("click", function () {
    if (pbSidebar.classList.contains("active")) {
      closePbSidebar();
    } else {
      openPbSidebar();
    }
  });

  pbOverlay.addEventListener("click", closePbSidebar);
  pbCloseBtn.addEventListener("click", closePbSidebar);

  document.querySelectorAll(".pb-mobile-nav a").forEach(function (link) {
    link.addEventListener("click", closePbSidebar);
  });
}


/* =========================
   Footer Animation JS
========================= */

const pbFooterItems = document.querySelectorAll(".pb-footer-animate");

if (pbFooterItems.length > 0) {
  const pbFooterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("pb-show");
        }
      });
    },
    {
      threshold: 0.18
    }
  );

  pbFooterItems.forEach(function (item) {
    pbFooterObserver.observe(item);
  });
}



/* =========================
   Footer Big Text Animation JS
========================= */

const pbBigFooterText = document.querySelector(".pb-footer-big-text");

if (pbBigFooterText) {
  const pbBigTextObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("pb-show");
        }
      });
    },
    {
      threshold: 0.25
    }
  );

  pbBigTextObserver.observe(pbBigFooterText);
}






document.addEventListener("DOMContentLoaded", function () {
  abtRevealAnimation();
  abtParallaxEffect();
});

function abtRevealAnimation() {
  const revealItems = document.querySelectorAll(".abt-reveal");

  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("abt-show");
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

function abtParallaxEffect() {
  const sections = document.querySelectorAll(".abt-parallax-section");

  if (!sections.length) return;

  function moveParallax() {
    sections.forEach(function (section) {
      const bg = section.querySelector(".abt-parallax-bg");

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