// ==================== DATA ====================
const menuItems = [
  {
    id: 1,
    name: "Nasi Liwet",
    category: "Prasmanan",
    desc: "Nasi gurih dengan ayam suwir, telur, dan sambal terasi.",
    price: "Rp 28.000",
    image: "https://picsum.photos/400/300?random=1",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Soto Ayam Lamongan",
    category: "Makanan",
    desc: "Soto bening dengan ayam kampung, koya, dan sambal.",
    price: "Rp 25.000",
    image: "https://picsum.photos/400/300?random=2",
    badge: "Favorit",
  },
  {
    id: 3,
    name: "Wedang Ronde",
    category: "Minuman",
    desc: "Wedang jahe hangat dengan bola ketan isi kacang.",
    price: "Rp 18.000",
    image: "https://picsum.photos/400/300?random=3",
    badge: null,
  },
  {
    id: 4,
    name: "Kopi Robusta",
    category: "Minuman",
    desc: "Kopi hitam khas Jawa dengan aroma smoky yang kental.",
    price: "Rp 20.000",
    image: "https://picsum.photos/400/300?random=4",
    badge: null,
  },
  {
    id: 5,
    name: "Pisang Goreng Madu",
    category: "Camilan",
    desc: "Pisang goreng crispy dengan topping madu dan keju.",
    price: "Rp 15.000",
    image: "https://picsum.photos/400/300?random=5",
    badge: "Populer",
  },
  {
    id: 6,
    name: "Nasi Pecel",
    category: "Prasmanan",
    desc: "Nasi dengan sayur rebus, sambal pecel, dan rempeyek.",
    price: "Rp 22.000",
    image: "https://picsum.photos/400/300?random=6",
    badge: null,
  },
  {
    id: 7,
    name: "Gudeg Jogja",
    category: "Makanan",
    desc: "Nangka muda dimasak santan khas Jogja.",
    price: "Rp 30.000",
    image: "https://picsum.photos/400/300?random=7",
    badge: "Premium",
  },
  {
    id: 8,
    name: "Es Dawet Ayu",
    category: "Minuman",
    desc: "Es dawet dengan cendol, santan, dan gula aren.",
    price: "Rp 16.000",
    image: "https://picsum.photos/400/300?random=8",
    badge: null,
  },
];

const galleryItems = [
  {
    id: 1,
    title: "Suasana Indoor Joglo",
    category: "Interior",
    image: "assets/images/gallery/1.jpg",
  },
  {
    id: 2,
    title: "Prasmanan Nasi Liwet",
    category: "Makanan",
    image: "assets/images/gallery/2.jpg",
  },
  {
    id: 3,
    title: "Outdoor Area",
    category: "Suasana",
    image: "assets/images/gallery/3.jpg",
  },
  {
    id: 4,
    title: "Live Music Classic",
    category: "Suasana",
    image: "assets/images/gallery/1.jpg",
  },
  {
    id: 5,
    title: "Detail Ukiran Joglo",
    category: "Interior",
    image: "assets/images/gallery/2.jpg",
  },
  {
    id: 6,
    title: "Wedang Ronde Hangat",
    category: "Makanan",
    image: "assets/images/gallery/3.jpg",
  },
  {
    id: 7,
    title: "Taman Belakang",
    category: "Suasana",
    image: "assets/images/gallery/1.jpg",
  },
  {
    id: 8,
    title: "Coffe Bar",
    category: "Interior",
    image: "assets/images/gallery/2.jpg",
  },
];

const jobs = [
  {
    title: "Koki Prasmanan",
    qualification: "Pengalaman 2 tahun di bidang kuliner Jawa.",
  },
  { title: "Barista", qualification: "Paham brewing dan latte art." },
  {
    title: "Pelayan / Waitress",
    qualification: "Ramah, komunikatif, dan siap kerja shift.",
  },
  {
    title: "Musisi (Live Music)",
    qualification: "Menguasai alat musik dan tembang 80-2000an.",
  },
  {
    title: "Marketing & Content",
    qualification: "Kreatif, menguasai sosmed dan videografi.",
  },
];

// ==================== INIT ====================
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initCursor();
  initScrollProgress();
  initHeader();
  initMobileMenu();
  initActiveNav();
  initHeroSlideshow();
  initMenu();
  initGallery();
  initLightbox();
  initTestimonialSlider();
  initFAQ();
  initCountdown();
  initCareer();
  initReservationForm();
  initCareerForm();
  initBackToTop();
  initNewsletter();
  initCounterAnimation();
  initParallax();
  initAboutTabs();
  initReducedMotion();
  updateOperationalStatus();
  initHeroSlideshowModern();
  initScrollReveal();
  setInterval(updateOperationalStatus, 60000);
});

// ==================== LOADER ====================
function initLoader() {
  const loader = document.getElementById("loading-screen");
  if (!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s";
      setTimeout(() => loader.remove(), 500);
    }, 800);
  });
}

// ==================== CURSOR ====================
function initCursor() {
  const cursor = document.getElementById("custom-cursor");
  const ring = document.getElementById("custom-cursor-ring");
  if (!cursor || !ring) return;
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    ring.style.left = e.clientX + "px";
    ring.style.top = e.clientY + "px";
  });
}

// ==================== SCROLL PROGRESS ====================
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (winScroll / height) * 100 + "%";
  });
}

// ==================== HEADER ====================
function initHeader() {
  const header = document.getElementById("header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle("open");
    document.body.style.overflow = menu.classList.contains("open")
      ? "hidden"
      : "";
  });
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      menu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

// ==================== ACTIVE NAV ====================
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.getAttribute("id");
    });
    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("data-section") === current
      );
    });
  });
}

// ==================== HERO SLIDESHOW ====================
function initHeroSlideshow() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  if (slides.length === 0) return;
  let index = 0;
  function show(i) {
    slides.forEach((s) => s.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));
    slides[i].classList.add("active");
    if (dots[i]) dots[i].classList.add("active");
    index = i;
  }
  dots.forEach((dot, i) => dot.addEventListener("click", () => show(i)));
  setInterval(() => show((index + 1) % slides.length), 5000);
}

// ==================== HERO SLIDESHOW MODERN ====================
function initHeroSlideshowModern() {
  const slides = document.querySelectorAll(".hero-modern-bg .hero-slide");
  if (!slides.length) return;
  let current = 0;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
    });
  }

  // Auto slide
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
}

// ==================== SCROLL REVEAL (Intersection Observer) ====================
function initScrollReveal() {
  const elements = document.querySelectorAll("[data-reveal]");
  if (!elements.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
  );
  elements.forEach((el) => observer.observe(el));
}

// ==================== MENU ====================
function initMenu() {
  const grid = document.getElementById("menu-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const search = document.getElementById("menu-search");
  if (!grid) return;
  let category = "Semua";
  function render() {
    const q = search ? search.value.toLowerCase() : "";
    const filtered = menuItems.filter(
      (item) =>
        (category === "Semua" || item.category === category) &&
        (item.name.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q))
    );
    grid.innerHTML = filtered
      .map(
        (item) => `
            <div class="menu-card">
              <div class="relative">
                <img src="${item.image}" alt="${item.name}" loading="lazy" />
                ${item.badge ? `<span class="badge">${item.badge}</span>` : ""}
              </div>
              <div class="p-5">
                <h3>${item.name}</h3>
                <p class="desc">${item.desc}</p>
                <div class="bottom">
                  <span class="price">${item.price}</span>
                  <button onclick="orderDirect('${
                    item.name
                  }')" class="btn-pesan">Pesan</button>
                </div>
              </div>
            </div>
          `
      )
      .join("");
  }
  filterBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      category = btn.dataset.category;
      render();
    })
  );
  if (search) search.addEventListener("input", render);
  render();
}
window.orderDirect = (item) => {
  const notes = document.getElementById("reservation-notes");
  if (notes) notes.value = `Saya tertarik memesan menu: "${item}".`;
  document.getElementById("reservasi").scrollIntoView({ behavior: "smooth" });
};

// ==================== GALLERY ====================
let lightboxIndex = 0;
function initGallery() {
  const grid = document.getElementById("gallery-grid");
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  if (!grid) return;
  let category = "Semua";
  function render() {
    const filtered =
      category === "Semua"
        ? galleryItems
        : galleryItems.filter((i) => i.category === category);
    grid.innerHTML = filtered
      .map(
        (item, idx) => `
            <div class="gallery-item cursor-pointer" onclick="openLightbox(${idx})">
              <img src="${item.image}" alt="${item.title}" loading="lazy" />
            </div>
          `
      )
      .join("");
    window.filteredGallery = filtered;
  }
  filterBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      category = btn.dataset.category;
      render();
    })
  );
  render();
}

function openLightbox(index) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  const items = window.filteredGallery || galleryItems;
  if (!lb || !img || !caption) return;
  lightboxIndex = index;
  img.src = items[index].image;
  caption.textContent = items[index].title;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.classList.remove("open");
  document.body.style.overflow = "";
}
function initLightbox() {
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.querySelector(".lightbox-prev");
  const nextBtn = document.querySelector(".lightbox-next");
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const items = window.filteredGallery || galleryItems;
      lightboxIndex = (lightboxIndex - 1 + items.length) % items.length;
      openLightbox(lightboxIndex);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const items = window.filteredGallery || galleryItems;
      lightboxIndex = (lightboxIndex + 1) % items.length;
      openLightbox(lightboxIndex);
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

// ==================== TESTIMONI SLIDER ====================
function initTestimonialSlider() {
  const track = document.getElementById("testimoni-track");
  const prev = document.querySelector(".testimoni-prev");
  const next = document.querySelector(".testimoni-next");
  const dotsContainer = document.getElementById("testimoni-dots");
  if (!track) return;
  const cards = track.querySelectorAll(".testimoni-card");
  const total = cards.length;
  let idx = 0;

  function updateDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = "";
    for (let i = 0; i < total; i++) {
      const dot = document.createElement("button");
      dot.className = "dot" + (i === idx ? " active" : "");
      dot.setAttribute("aria-label", `Testimoni ${i + 1}`);
      dot.addEventListener("click", () => {
        idx = i;
        update();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function update() {
    track.style.transform = `translateX(-${idx * 100}%)`;
    if (dotsContainer) {
      dotsContainer.querySelectorAll(".dot").forEach((d, i) => {
        d.classList.toggle("active", i === idx);
      });
    }
  }

  if (prev)
    prev.addEventListener("click", () => {
      idx = (idx - 1 + total) % total;
      update();
    });
  if (next)
    next.addEventListener("click", () => {
      idx = (idx + 1) % total;
      update();
    });
  updateDots();
  update();
}

// ==================== FAQ ====================
function initFAQ() {
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector(".faq-icon");
      const isOpen = answer.style.maxHeight;
      document
        .querySelectorAll(".faq-answer")
        .forEach((a) => (a.style.maxHeight = null));
      document
        .querySelectorAll(".faq-icon")
        .forEach((i) => (i.className = "fa-solid fa-plus faq-icon"));
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        if (icon) icon.className = "fa-solid fa-minus faq-icon";
      }
    });
  });
}

// ==================== COUNTDOWN ====================
function initCountdown() {
  const target = new Date("2026-07-04T19:00:00+07:00").getTime();
  setInterval(() => {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) return;
    const days = document.getElementById("countdown-days");
    const hours = document.getElementById("countdown-hours");
    const minutes = document.getElementById("countdown-minutes");
    if (days) days.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (hours)
      hours.textContent = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
    if (minutes)
      minutes.textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  }, 1000);
}

// ==================== CAREER ====================
function initCareer() {
  const list = document.getElementById("jobs-list");
  const select = document.getElementById("career-position");
  if (!list) return;
  list.innerHTML = jobs
    .map(
      (job) => `
          <div class="job-card">
            <div>
              <h4>${job.title}</h4>
              <p>${job.qualification}</p>
            </div>
            <button onclick="applyForJob('${job.title}')">Lamar</button>
          </div>
        `
    )
    .join("");
  if (select) {
    jobs.forEach((j) => {
      const opt = document.createElement("option");
      opt.value = j.title;
      opt.textContent = j.title;
      select.appendChild(opt);
    });
  }
}
window.applyForJob = (title) => {
  const select = document.getElementById("career-position");
  if (select) select.value = title;
  document.getElementById("karir").scrollIntoView({ behavior: "smooth" });
};

// ==================== RESERVATION FORM ====================
function initReservationForm() {
  const form = document.getElementById("reservation-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reservation-name")?.value || "";
    const phone = document.getElementById("reservation-phone")?.value || "";
    const date = document.getElementById("reservation-date")?.value || "";
    const time = document.getElementById("reservation-time")?.value || "";
    const guests = document.getElementById("reservation-guests")?.value || "";
    const area = document.getElementById("reservation-area")?.value || "";
    const notes = document.getElementById("reservation-notes")?.value || "";
    const msg = `Halo Pawon Mbok Kasti, saya ingin reservasi:\nNama: ${name}\nTelepon: ${phone}\nTanggal: ${date}\nJam: ${time}\nJumlah: ${guests} orang\nArea: ${area}\nCatatan: ${notes}`;
    window.open(
      `https://wa.me/6282342707766?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  });
}

// ==================== CAREER FORM ====================
function initCareerForm() {
  const form = document.getElementById("career-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const success = document.getElementById("career-success");
    const error = document.getElementById("career-error");
    if (success) {
      success.classList.remove("hidden");
      if (error) error.classList.add("hidden");
    }
    setTimeout(() => {
      if (success) success.classList.add("hidden");
      form.reset();
    }, 5000);
  });
}

// ==================== BACK TO TOP ====================
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  const circle = btn.querySelector("circle");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 600);
    if (circle) {
      const progress = Math.min(
        window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight),
        1
      );
      circle.style.strokeDashoffset = 113.1 - 113.1 * progress;
    }
  });
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

// ==================== NEWSLETTER ====================
function initNewsletter() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Terima kasih telah berlangganan!");
    form.reset();
  });
}

// ==================== COUNTER ANIMATION ====================
function initCounterAnimation() {
  const counters = document.querySelectorAll(".counter-value[data-count]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = +el.getAttribute("data-count");
          animateValue(el, 0, target, 2000);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => observer.observe(c));
}
function animateValue(el, start, end, duration) {
  let startTime = null;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    el.textContent = Math.floor(progress * (end - start) + start) + "+";
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ==================== PARALLAX ====================
function initParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    document.querySelectorAll(".parallax-bg").forEach((el) => {
      el.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
  });
}

// ==================== ABOUT TABS ====================
function initAboutTabs() {
  const tabs = document.querySelectorAll(".about-tab");
  const contents = {
    visi: document.getElementById("tab-visi"),
    filosofi: document.getElementById("tab-filosofi"),
  };

  if (tabs.length === 0) return;

  function activateTab(tabId) {
    // Sembunyikan semua konten
    Object.values(contents).forEach((el) => {
      if (el) el.classList.add("hidden");
    });

    // Tampilkan konten yang dipilih
    const target = contents[tabId];
    if (target) target.classList.remove("hidden");

    // Update class active pada tombol
    tabs.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });
  }

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tab;
      activateTab(tabId);
    });
  });

  // Aktifkan tab pertama secara default (visi)
  activateTab("visi");
}

// ==================== REDUCED MOTION ====================
function initReducedMotion() {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq.matches) {
    document.documentElement.style.setProperty("--transition-smooth", "0s");
  }
}

// ==================== OPERATIONAL STATUS ====================
function updateOperationalStatus() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isOpen = day !== 1 && hour >= 8 && hour < 23;
  const text = isOpen ? "BUKA" : "TUTUP";
  const badge = document.getElementById("status-badge");
  const badgeMobile = document.getElementById("status-badge-mobile");
  const html = `${isOpen ? '<span class="pulse-dot"></span>' : ""} ${text}`;
  const cls = `status-badge${isOpen ? "" : " tutup"}`;
  if (badge) {
    badge.innerHTML = html;
    badge.className = cls;
  }
  if (badgeMobile) {
    badgeMobile.innerHTML = html;
    badgeMobile.className = `status-badge-mobile${isOpen ? "" : " tutup"}`;
  }
}

// ==================== COPY TO CLIPBOARD ====================
window.copyToClipboard = (text) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      const alert = document.getElementById("copy-alert");
      if (alert) {
        alert.classList.remove("hidden");
        setTimeout(() => alert.classList.add("hidden"), 3000);
      }
    });
  } else {
    // Fallback
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
    const alert = document.getElementById("copy-alert");
    if (alert) {
      alert.classList.remove("hidden");
      setTimeout(() => alert.classList.add("hidden"), 3000);
    }
  }
};

// ==================== LEGAL MODAL ====================
window.openModal = (type) => {
  const modal = document.getElementById("legal-modal");
  const title = document.getElementById("legal-modal-title");
  const body = document.getElementById("legal-modal-body");
  if (!modal || !title || !body) return;
  if (type === "privacy") {
    title.textContent = "Kebijakan Privasi";
    body.innerHTML = `
        <p>Kami menghormati privasi Anda. Informasi pribadi yang Anda berikan melalui formulir reservasi atau karir hanya akan digunakan untuk keperluan internal Pawon Mbok Kasti.</p>
        <p>Kami tidak akan membagikan data Anda kepada pihak ketiga tanpa izin Anda, kecuali diwajibkan oleh hukum.</p>
        <p>Dengan menggunakan website ini, Anda menyetujui pengumpulan data sesuai dengan kebijakan ini.</p>
      `;
  } else {
    title.textContent = "Syarat & Ketentuan";
    body.innerHTML = `
        <p>Dengan mengakses dan menggunakan website Pawon Mbok Kasti, Anda menyetujui untuk terikat dengan syarat dan ketentuan berikut:</p>
        <ul style="list-style:disc;padding-left:1.5rem;margin:0.5rem 0;">
          <li>Reservasi dianggap sah setelah konfirmasi dari tim kami.</li>
          <li>Pembatalan reservasi minimal 2 jam sebelum jam reservasi.</li>
          <li>Menu dapat berubah sewaktu-waktu tanpa pemberitahuan.</li>
          <li>Kami berhak menolak pelayanan kepada siapa pun tanpa alasan.</li>
        </ul>
      `;
  }
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
};
window.closeModal = () => {
  const modal = document.getElementById("legal-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
