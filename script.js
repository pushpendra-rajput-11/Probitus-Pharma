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


/* =========================
   Product Categories Animation JS
========================= */

const pbCategoryRevealItems = document.querySelectorAll(".pb-cat-reveal");

const pbCategoryObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("pb-show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

pbCategoryRevealItems.forEach(function (item) {
  pbCategoryObserver.observe(item);
});



/* =========================
   Why Choose Us Smooth Animation JS
========================= */

const pbWhyRevealItems = document.querySelectorAll(".pb-why-reveal");

const pbWhyObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("pb-show");
      }
    });
  },
  {
    threshold: 0.16
  }
);

pbWhyRevealItems.forEach(function (item) {
  pbWhyObserver.observe(item);
});


/* =========================
   Why Choose Us Card Glow Effect
========================= */

document.querySelectorAll(".pb-why-card").forEach(function (card) {
  const glow = document.createElement("span");
  glow.classList.add("pb-why-card-glow");
  card.prepend(glow);

  card.addEventListener("mousemove", function (event) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--why-x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--why-y", `${(y / rect.height) * 100}%`);
  });

  card.addEventListener("mouseleave", function () {
    card.style.setProperty("--why-x", "50%");
    card.style.setProperty("--why-y", "50%");
  });
});


/* =========================
   Why Choose Us Image Parallax
========================= */

const pbWhyImageWrap = document.querySelector(".pb-why-image-wrap");

if (pbWhyImageWrap) {
  pbWhyImageWrap.addEventListener("mousemove", function (event) {
    if (window.innerWidth <= 991) return;

    const rect = pbWhyImageWrap.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 7;
    const rotateX = ((y / rect.height) - 0.5) * -7;

    pbWhyImageWrap.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  pbWhyImageWrap.addEventListener("mouseleave", function () {
    pbWhyImageWrap.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  });
}


/* =========================
   Certification Animation JS
========================= */

const pbCertRevealItems = document.querySelectorAll(".pb-cert-reveal");

const pbCertObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("pb-show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

pbCertRevealItems.forEach(function (item) {
  pbCertObserver.observe(item);
});