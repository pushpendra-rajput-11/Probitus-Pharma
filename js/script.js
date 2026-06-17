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
    threshold: 0.18,
  },
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
      threshold: 0.25,
    },
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
    threshold: 0.18,
  },
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
    threshold: 0.14,
  },
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

    const rotateY = (x / rect.width - 0.5) * 5;
    const rotateX = (y / rect.height - 0.5) * -5;

    pbHeroImageShell.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    pbHeroImageShell.style.setProperty(
      "--hero-x",
      `${(x / rect.width) * 100}%`,
    );
    pbHeroImageShell.style.setProperty(
      "--hero-y",
      `${(y / rect.height) * 100}%`,
    );
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
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            aboutSection.classList.add("prb-show");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(aboutSection);
  }

  if (imageCard) {
    imageCard.addEventListener("mousemove", function (e) {
      const rect = imageCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = (x / rect.width - 0.5) * 8;
      const rotateX = (y / rect.height - 0.5) * -8;

      imageCard.style.transform =
        "perspective(1000px) rotateX(" +
        rotateX +
        "deg) rotateY(" +
        rotateY +
        "deg) translateY(-6px)";
    });

    imageCard.addEventListener("mouseleave", function () {
      imageCard.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
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
    threshold: 0.15,
  },
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
    threshold: 0.16,
  },
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

    const rotateY = (x / rect.width - 0.5) * 7;
    const rotateX = (y / rect.height - 0.5) * -7;

    pbWhyImageWrap.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
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
    threshold: 0.15,
  },
);

pbCertRevealItems.forEach(function (item) {
  pbCertObserver.observe(item);
});

/* =========================
   Product Portfolio Data
========================= */

const pbProductData = {
  "rich-pcos": {
    image: "assets/rich-pcos-transparent-clean.png",
    imageAlt: "RICH-PCOS Product",
    category: "Women’s Health / PCOS Support",
    title: "RICH-PCOS",
    overview:
      "A complete ovary nutrition support formulation designed for hormonal balance, ovulatory wellness, insulin sensitivity, antioxidant protection, and metabolic support.",
    composition: [
      "Myo-Inositol 1000 mg",
      "Berberine Phytosome 227.25 mg",
      "D-Chiro Inositol 25 mg",
      "Alpha Lactalbumin 25 mg",
      "Grape Seed Extract 4.25 mg",
      "Chromium Picolinate 201.5 mcg",
      "L-Methylfolate Calcium 45 mcg",
    ],
    support: [
      "PCOS support",
      "Irregular cycle support",
      "Ovulatory function support",
      "Insulin resistance support",
      "Antioxidant protection",
      "Follicular development support",
    ],
    positioning:
      "Display this product as a premium women’s health formulation focused on PCOS, hormonal balance, ovary nutrition, insulin sensitivity, and reproductive wellness.",
  },

  probizasta: {
    image: "assets/probizasta-200-sr-transparent-clean.png",
    imageAlt: "Probizasta-200 SR Product",
    category: "Women’s Health / Progesterone Support",
    title: "Probizasta-200 SR",
    overview:
      "A sustained-release progesterone formulation positioned for clinician-directed reproductive support and pregnancy maintenance care.",
    composition: ["Natural Micronized Progesterone SR 200 mg"],
    support: [
      "Luteal phase support",
      "Progesterone deficiency support",
      "IVF support",
      "Pregnancy maintenance support",
      "Recurrent miscarriage support",
      "Threatened abortion support",
    ],
    positioning:
      "Display this as a specialist progesterone support product with a trustworthy and clinical tone. Avoid over-promising; keep the content doctor-directed.",
  },

  "life-nest": {
    image: "assets/life-nest-f-transparent-clean.png",
    imageAlt: "Life Nest-F Product",
    category: "Female Fertility Support",
    title: "Life Nest-F",
    overview:
      "A fertility-focused formulation combining amino acids, antioxidants, minerals, vitamins, and herbal extract to support reproductive wellness.",
    composition: [
      "L-Arginine 100 mg",
      "Green Tea Extract 100 mg",
      "Inositol 100 mg",
      "Magnesium 50 mg",
      "Chasteberry Extract 40 mg",
      "Vitamin C 40 mg",
      "Niacinamide 12 mg",
      "Zinc 10 mg",
      "Vitamin E 10 mg",
      "Iron 3 mg",
    ],
    support: [
      "Ovulation support",
      "Luteal phase support",
      "Endometrial receptivity support",
      "Implantation support",
      "Follicular maturation support",
      "Conception support",
      "Early pregnancy support",
    ],
    positioning:
      "Display Life Nest-F as a complete female fertility wellness product with focus on reproductive nutrition, hormonal balance, and conception support.",
  },

  "stop-nvp": {
    image: "assets/stop-nvp-transparent-clean.png",
    imageAlt: "STOP-NVP Product",
    category: "Pregnancy Care",
    title: "STOP-NVP",
    overview:
      "A pregnancy-focused formulation positioned for doctor-directed support in nausea, vomiting, and morning sickness care.",
    composition: [
      "Doxylamine 20 mg",
      "Pyridoxine HCl 20 mg",
      "Folic Acid 5 mg",
    ],
    support: [
      "Morning sickness support",
      "Nausea and vomiting support in pregnancy",
      "Pregnancy wellness support",
      "Folic acid nutritional support",
    ],
    positioning:
      "Display STOP-NVP under pregnancy care with a calm, supportive tone. Keep claims responsible and physician-directed.",
  },

  "guid-mag": {
    image: "assets/guid-mag-transparent-clean.png",
    imageAlt: "Guid-MAG Product",
    category: "Pregnancy / Metabolic / Bone & Muscle Support",
    title: "Guid-MAG",
    overview:
      "A magnesium glycinate complex and Vitamin D3 formulation positioned for muscle comfort, bone strength, glucose metabolism support, and pregnancy-related wellness.",
    composition: [
      "Magnesium Glycine Complex equivalent to Elemental Magnesium 250 mg",
      "Vitamin D3 Cholecalciferol 1000 IU",
    ],
    support: [
      "Muscle cramp support",
      "Bone strength support",
      "Vitamin D deficiency support",
      "Neuromuscular wellness",
      "Pregnancy-related metabolic support",
      "Glucose metabolism support",
    ],
    positioning:
      "Display Guid-MAG as a versatile magnesium and Vitamin D3 product for pregnancy wellness, metabolic care, muscle comfort, and bone support.",
  },

  seratus: {
    image: "assets/seratus-transparent-clean.png",
    imageAlt: "Seratus Product",
    category: "Joint Care / Mobility Support",
    title: "Seratus",
    overview:
      "A joint mobility support formulation developed with collagen peptide, herbal extracts, antioxidants, and sodium hyaluronate for cartilage and flexibility support.",
    composition: [
      "Collagen Peptide Type-II 40 mg",
      "Curcumin Extract 125 mg",
      "Boswellia 100 mg",
      "Rose Hip Extract 100 mg",
      "Vitamin C 35 mg",
      "Sodium Hyaluronate 80 mg",
      "Astaxanthin 4 mg",
    ],
    support: [
      "Joint pain support",
      "Cartilage health support",
      "Mobility support",
      "Sports injury support",
      "Age-related joint wellness",
      "Flexibility support",
    ],
    positioning:
      "Display Seratus as a premium joint care product focused on cartilage support, inflammation-focused wellness, flexibility, and improved mobility.",
  },
};

/* =========================
   Product Reveal Animation
========================= */

const pbProductRevealItems = document.querySelectorAll(".pb-product-reveal");

const pbProductObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("pb-show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

pbProductRevealItems.forEach(function (item) {
  pbProductObserver.observe(item);
});

/* =========================
   Product Filter JS
========================= */

const pbProductFilterBtns = document.querySelectorAll(".pb-product-filter-btn");
const pbProductCards = document.querySelectorAll(".pb-product-card");

pbProductFilterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const filterValue = btn.getAttribute("data-filter");

    pbProductFilterBtns.forEach(function (item) {
      item.classList.remove("active");
    });

    btn.classList.add("active");

    pbProductCards.forEach(function (card) {
      const category = card.getAttribute("data-category");

      if (filterValue === "all" || category.includes(filterValue)) {
        card.classList.remove("pb-hide");
      } else {
        card.classList.add("pb-hide");
      }
    });
  });
});

/* =========================
   Product Modal JS
========================= */

const pbProductModal = document.querySelector(".pb-product-modal");
const pbProductModalOverlay = document.querySelector(
  ".pb-product-modal-overlay",
);
const pbProductModalClose = document.querySelector(".pb-product-modal-close");

const pbModalImage = document.getElementById("pbModalImage");
const pbModalCategory = document.getElementById("pbModalCategory");
const pbModalTitle = document.getElementById("pbModalTitle");
const pbModalOverview = document.getElementById("pbModalOverview");
const pbModalComposition = document.getElementById("pbModalComposition");
const pbModalSupport = document.getElementById("pbModalSupport");
const pbModalPositioning = document.getElementById("pbModalPositioning");

function pbCreateListItems(listElement, items) {
  listElement.innerHTML = "";

  items.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
}

function pbOpenProductModal(productKey) {
  const product = pbProductData[productKey];

  if (!product) return;

  pbModalImage.src = product.image;
  pbModalImage.alt = product.imageAlt;

  pbModalCategory.textContent = product.category;
  pbModalTitle.textContent = product.title;
  pbModalOverview.textContent = product.overview;
  pbModalPositioning.textContent = product.positioning;

  pbCreateListItems(pbModalComposition, product.composition);
  pbCreateListItems(pbModalSupport, product.support);

  pbProductModal.classList.add("active");
  pbProductModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function pbCloseProductModal() {
  pbProductModal.classList.remove("active");
  pbProductModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".pb-product-detail-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const productKey = btn.getAttribute("data-product");
    pbOpenProductModal(productKey);
  });
});

pbProductModalOverlay.addEventListener("click", pbCloseProductModal);
pbProductModalClose.addEventListener("click", pbCloseProductModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && pbProductModal.classList.contains("active")) {
    pbCloseProductModal();
  }
});




/* =========================
   Investicon Reference Style Hero Slider
   Fixed Sequence + 5 Seconds + Smooth Zoom
========================= */

document.addEventListener("DOMContentLoaded", function () {
  const heroSlider = document.querySelector("#ihsHeroSlider");
  const slides = document.querySelectorAll(".ihs-slide");
  const dots = document.querySelectorAll("[data-ihs-dot]");

  if (!heroSlider || !slides.length) return;

  if (window.investiconStyleHeroRunning) return;
  window.investiconStyleHeroRunning = true;

  let currentSlide = 0;
  let sliderTimeout = null;
  const slideDuration = 4000;

  function preloadImages() {
    slides.forEach(function (slide) {
      const bgImage = slide.style.backgroundImage;
      const imageUrl = bgImage.replace(/^url\(["']?/, "").replace(/["']?\)$/, "");

      if (imageUrl) {
        const img = new Image();
        img.src = imageUrl;
      }
    });
  }

  function clearActiveSlides() {
    slides.forEach(function (slide) {
      slide.classList.remove("active", "ihs-zooming");
      slide.style.animation = "none";
      slide.style.transform = "scale(1)";
      slide.offsetHeight;
      slide.style.animation = "";
    });

    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });
  }

  function showSlide(index) {
    clearActiveSlides();

    const slide = slides[index];

    slide.classList.add("active");

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        slide.classList.add("ihs-zooming");
      });
    });

    if (dots[index]) {
      dots[index].classList.add("active");
    }

    currentSlide = index;
  }

  function nextSlide() {
    const nextIndex = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    showSlide(nextIndex);
    startSlider();
  }

  function startSlider() {
    if (sliderTimeout) {
      clearTimeout(sliderTimeout);
    }

    sliderTimeout = setTimeout(function () {
      nextSlide();
    }, slideDuration);
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      const index = Number(dot.getAttribute("data-ihs-dot"));

      showSlide(index);
      startSlider();
    });
  });

  preloadImages();
  showSlide(0);
  startSlider();
});



        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-nav span');

        let current = 0;

        function showSlide(index) {

            slides.forEach((slide) => {
                slide.classList.remove('active');
            });

            dots.forEach((dot) => {
                dot.classList.remove('active');
            });

            slides[index].classList.add('active');
            dots[index].classList.add('active');

            current = index;
        }

        /* AUTO SLIDE */
        setInterval(() => {

            current++;

            if (current >= slides.length) {
                current = 0;
            }

            showSlide(current);

        }, 5000);

        /* DOT CLICK */
        dots.forEach((dot, index) => {

            dot.addEventListener('click', () => {

                showSlide(index);

            });

        });
  