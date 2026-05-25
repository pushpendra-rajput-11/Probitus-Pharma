/* =========================
   Header JS
========================= */

const pbMenuBtn = document.querySelector(".pb-mobile-menu-btn");
const pbSidebar = document.querySelector(".pb-mobile-sidebar");
const pbOverlay = document.querySelector(".pb-menu-overlay");
const pbCloseBtn = document.querySelector(".pb-sidebar-close");

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



/* =========================
   Footer Animation JS
========================= */

const pbFooterItems = document.querySelectorAll(".pb-footer-animate");

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



/* =========================
   Contact Section Animation JS
========================= */

const pbContactRevealItems = document.querySelectorAll(".pb-contact-reveal");

const pbContactObserver = new IntersectionObserver(
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

pbContactRevealItems.forEach(function (item) {
  pbContactObserver.observe(item);
});



/* =========================
   Premium Hero Animation JS
========================= */

const pbHeroRevealItems = document.querySelectorAll(".pb-hero-reveal");

const pbHeroRevealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("pb-show");
      }
    });
  },
  {
    threshold: 0.14
  }
);

pbHeroRevealItems.forEach(function (item) {
  pbHeroRevealObserver.observe(item);
});


/* =========================
   Premium Hero Image Hover Effect JS
========================= */

const pbHeroImageShell = document.querySelector(".pb-hero-image-shell");

if (pbHeroImageShell) {
  pbHeroImageShell.addEventListener("mousemove", function (event) {
    if (window.innerWidth <= 991) return;

    const rect = pbHeroImageShell.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 5;
    const rotateX = ((y / rect.height) - 0.5) * -5;

    pbHeroImageShell.style.transform =
      `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    pbHeroImageShell.style.setProperty("--hero-x", `${(x / rect.width) * 100}%`);
    pbHeroImageShell.style.setProperty("--hero-y", `${(y / rect.height) * 100}%`);
  });

  pbHeroImageShell.addEventListener("mouseleave", function () {
    pbHeroImageShell.style.transform =
      "perspective(1100px) rotateX(0deg) rotateY(0deg)";

    pbHeroImageShell.style.setProperty("--hero-x", "50%");
    pbHeroImageShell.style.setProperty("--hero-y", "50%");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".prb-about-section");
  const imageCard = document.querySelector(".prb-about-image-card");

  if (aboutSection) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          aboutSection.classList.add("prb-show");
        }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(aboutSection);
  }

  if (imageCard) {
    imageCard.addEventListener("mousemove", function(e) {
      const rect = imageCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 8;
      const rotateX = ((y / rect.height) - 0.5) * -8;

      imageCard.style.transform =
        "perspective(1000px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-6px)";
    });

    imageCard.addEventListener("mouseleave", function() {
      imageCard.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  }
});