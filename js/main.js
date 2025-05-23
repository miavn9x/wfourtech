/* Data Definitions */
const projectsData = [
  {
    id: 1,
    name: "CAXAVA – Thương hiệu balo",
    description:
      "Website thương mại điện tử cho thương hiệu balo cao cấp, tối ưu trải nghiệm mua sắm.",
    urlview: "https://miavn9x.github.io/CAXAVA/",
    url: "https://caxava.onrender.com",
    hinhanh: "./img/1.png",
    delay: "100",
  },
  {
    id: 2,
    name: "ChinbiKids – Chăm sóc trẻ em",
    description:
      "Website giới thiệu dịch vụ chăm sóc và giáo dục trẻ em, thân thiện với người dùng.",
    urlview: "https://miavn9x.github.io/CHINBIKIDS/",
    url: "https://chinbikids.onrender.com",
    hinhanh: "./img/2.png",
    delay: "200",
  },
  {
    id: 3,
    name: "Lý Trang Window",
    description:
      "Website giới thiệu dịch vụ cung cấp và lắp đặt cửa nhôm kính, tập trung vào thiết kế hiện đại.",
    urlview: "https://miavn9x.github.io/Ly-Trang-Window/",
    url: "https://lytrangwindow.onrender.com",
    hinhanh: "./img/3.png",
    delay: "300",
  },
  {
    id: 4,
    name: "Minigame Marketing",
    description:
      "Ứng dụng web game tương tác cho chiến dịch marketing, thu hút người dùng.",
    urlview: "https://miavn9x.github.io/MINIGAME/",
    url: "https://minigame-x1fq.onrender.com",
    hinhanh: "./img/4.png",
    delay: "400",
  },
  {
    id: 5,
    name: "Pearl Handmade - Túi Thủ Công Cao Cấp",
    description:
      "Website thương mại điện tử cho thương hiệu túi thủ công cao cấp",
    urlview: "https://miavn9x.github.io/pearl_nguyenhandmade/",
    url: "https://pearlnguyenhandmade.onrender.com",
    hinhanh: "./img/5.png",
    delay: "100",
  },
  {
    id: 6,
    name: "Vân Art Gallery",
    description:
      "Website tranh vẽ nghệ thuật đánh thức cảm xúc qua từng nét cọ",
    urlview: "https://miavn9x.github.io/VANART/",
    url: "https://vanart-wfourtech.onrender.com",
    hinhanh: "./img/6.png",
    delay: "200",
  },
];

const templatesData = [
  {
    id: 1,
    name: "Fashion Backpack",
    shortDescription: "Website thương mại điện tử cho thương hiệu balo cao cấp",
    urlview: "https://miavn9x.github.io/CAXAVA/",
    url: "https://caxava.onrender.com",
    hinhanh: "./img/1.png",
    category: "ecommerce",
    delay: "100",
  },
  {
    id: 2,
    name: "Mother & Baby Shop",
    shortDescription:
      "Website giới thiệu dịch vụ chăm sóc và phát triển trẻ em",
    urlview: "https://miavn9x.github.io/CHINBIKIDS/",
    url: "https://chinbikids.onrender.com",
    hinhanh: "./img/2.png",
    category: "ecommerce",
    delay: "200",
  },
  {
    id: 3,
    name: "High Quality Glass Doors",
    shortDescription:
      "Website giới thiệu dịch vụ cung cấp và lắp đặt cửa nhôm kính",
    urlview: "https://miavn9x.github.io/Ly-Trang-Window/",
    url: "https://lytrangwindow.onrender.com",
    hinhanh: "./img/3.png",
    category: "landingpage",
    delay: "300",
  },
  {
    id: 4,
    name: "Minigame Marketing",
    shortDescription: "Ứng dụng web game tương tác cho chiến dịch marketing",
    urlview: "https://miavn9x.github.io/MINIGAME/",
    url: "https://minigame-x1fq.onrender.com",
    hinhanh: "./img/4.png",
    category: "landingpage",
    delay: "400",
  },
  {
    id: 5,
    name: "Fashion Bag",
    shortDescription: "Website thương mại điện tử cho thương hiệu túi thủ công",
    urlview: "https://miavn9x.github.io/pearl_nguyenhandmade/",
    url: "https://pearlnguyenhandmade.onrender.com",
    hinhanh: "./img/5.png",
    category: "ecommerce",
    delay: "100",
  },
  {
    id: 6,
    name: "High Quality Paintings",
    shortDescription:
      "Website tranh vẽ nghệ thuật đánh thức cảm xúc qua từng nét cọ",
    urlview: "https://miavn9x.github.io/VANART/",
    url: "https://vanart-wfourtech.onrender.com",
    hinhanh: "./img/6.png",
    category: "landingpage",
    delay: "300",
  },
];

const templateCategories = [
  { id: "all", name: "Tất cả" },
  { id: "ecommerce", name: "Thương mại điện tử" },
  { id: "landingpage", name: "Landing page" },
  { id: "realestate", name: "Bất động sản" },
];

/* Utility Functions */
const createElement = (html) => {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstChild;
};

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

/* HTML Generation Functions */
const createProjectHTML = ({
  name,
  description,
  url,
  urlview,
  hinhanh,
  delay,
}) => `
  <div class="template-card bg-white rounded-xl shadow-lg overflow-hidden flex flex-col opacity-0 animate-fadeInUp delay-${delay}" role="listitem">
    <div class="iframe-container loading relative h-48" data-src="${urlview}">
      <img src="${hinhanh}" alt="Ảnh xem trước dự án ${name}" class="preview-image md:hidden" loading="lazy" />
      <div class="iframe-overlay absolute inset-0 z-10 bg-transparent cursor-pointer md:block hidden"></div>
    </div>
    <div class="p-6 ipad:p-4 flex flex-col flex-1">
      <h3 class="text-xl font-semibold mb-2 ipad:text-lg">${name}</h3>
      <p class="text-gray-600 mb-4 ipad:text-sm">${description}</p>
      <div class="mt-auto mb-1 flex justify-center space-x-4">
        <button class="preview-btn inline-flex items-center justify-center px-5 py-2 bg-accent text-white rounded-lg font-medium transition-all duration-300 hover:bg-accent-light hover:-translate-y-1 hover:shadow-lg" data-url="${urlview}" data-title="${name}" aria-label="Xem trước dự án ${name}" role="button">
          Xem trước
          <i class="fas fa-eye ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
        </button>
        <a href="${url}" target="_blank" class="inline-flex items-center justify-center px-5 py-2 bg-secondary text-white rounded-lg font-medium transition-all duration-300 hover:bg-secondary-light hover:-translate-y-1 hover:shadow-lg" aria-label="Xem chi tiết dự án ${name}">
          Xem chi tiết
          <i class="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
        </a>
      </div>
    </div>
  </div>
`;

const createTemplateCategoryHTML = ({ id, name }, isActive = false) => `
  <button class="template-filter ${
    isActive ? "bg-secondary text-white" : "bg-white text-gray-700"
  } px-4 py-2 rounded-full hover:bg-secondary hover:text-white transition-colors ipad:text-sm ipad:px-3 ipad:py-1" data-filter="${id}" role="button" aria-label="Lọc theo danh mục ${name}">
    ${name}
  </button>
`;

const createTemplateHTML = ({
  name,
  shortDescription,
  url,
  urlview,
  hinhanh,
  category,
  delay,
}) => `
  <div class="template-card bg-white rounded-xl shadow-lg overflow-hidden flex flex-col opacity-0 animate-fadeInUp delay-${delay}" data-category="${category}" role="listitem">
    <div class="iframe-container loading relative h-48" data-src="${urlview}">
      <img src="${hinhanh}" alt="Ảnh xem trước template ${name}" class="preview-image md:hidden" loading="lazy" />
      <div class="iframe-overlay absolute inset-0 z-10 bg-transparent cursor-pointer md:block hidden"></div>
    </div>
    <div class="p-4 bg-white ipad:p-3 flex flex-col flex-1">
      <h3 class="text-lg font-semibold mb-1 ipad:text-base">${name}</h3>
      <p class="text-gray-600 text-sm mb-3 ipad:text-xs">${shortDescription}</p>
      <div class="mt-auto mb-1 flex justify-center space-x-4">
        <button class="preview-btn inline-flex items-center justify-center px-4 py-2 bg-accent text-white rounded-lg font-medium transition-all duration-300 hover:bg-accent-light hover:-translate-y-1 hover:shadow-lg text-sm ipad:text-xs" data-url="${urlview}" data-title="${name}" aria-label="Xem trước template ${name}" role="button">
          Xem trước
          <i class="fas fa-eye ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
        </button>
        <a href="${url}" target="_blank" class="inline-flex items-center justify-center px-4 py-2 bg-secondary text-white rounded-lg font-medium transition-all duration-300 hover:bg-secondary-light hover:-translate-y-1 hover:shadow-lg text-sm ipad:text-xs" aria-label="Xem chi tiết template ${name}">
          Xem chi tiết
          <i class="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
        </a>
      </div>
    </div>
  </div>
`;

/* DOM Manipulation Functions */
const renderProjects = () => {
  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid) {
    console.warn("Element #projects-grid not found");
    return;
  }
  const fragment = document.createDocumentFragment();
  projectsData.forEach((data) =>
    fragment.appendChild(createElement(createProjectHTML(data)))
  );
  projectsGrid.innerHTML = "";
  projectsGrid.appendChild(fragment);
};

const renderTemplateCategories = () => {
  const templateFilters = document.getElementById("template-filters");
  if (!templateFilters) {
    console.warn("Element #template-filters not found");
    return;
  }
  const fragment = document.createDocumentFragment();
  templateCategories.forEach((category, index) =>
    fragment.appendChild(
      createElement(createTemplateCategoryHTML(category, index === 0))
    )
  );
  templateFilters.innerHTML = "";
  templateFilters.appendChild(fragment);
  templateFilters
    .querySelectorAll(".template-filter")
    .forEach((filter) =>
      filter.addEventListener("click", handleTemplateFilter)
    );
};

const renderTemplates = () => {
  const templatesGrid = document.getElementById("templates-grid");
  if (!templatesGrid) {
    console.warn("Element #templates-grid not found");
    return;
  }
  const fragment = document.createDocumentFragment();
  templatesData.forEach((data) =>
    fragment.appendChild(createElement(createTemplateHTML(data)))
  );
  templatesGrid.innerHTML = "";
  templatesGrid.appendChild(fragment);
};

/* Event Handlers */
const handleTemplateFilter = (e) => {
  e.preventDefault();
  const filterValue = e.currentTarget.dataset.filter;
  const templateFilters = document.querySelectorAll(".template-filter");
  const templateCards = document.querySelectorAll(
    "#templates-grid .template-card"
  );

  templateFilters.forEach((f) => {
    f.classList.toggle("bg-secondary", f === e.currentTarget);
    f.classList.toggle("text-white", f === e.currentTarget);
    f.classList.toggle("bg-white", f !== e.currentTarget);
    f.classList.toggle("text-gray-700", f !== e.currentTarget);
  });

  templateCards.forEach((card) => {
    const isVisible =
      filterValue === "all" || card.dataset.category === filterValue;
    card.style.transition = "opacity 0.3s ease";
    card.style.opacity = isVisible ? "1" : "0";
    card.style.display = isVisible ? "flex" : "none";
  });
};

const setupNavbarScroll = () => {
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("back-to-top");
  if (!navbar || !backToTop) return;

  const toggleNavbar = () => {
    const isScrolled = window.scrollY > 50;
    navbar.classList.toggle("bg-white", isScrolled);
    navbar.classList.toggle("shadow-md", isScrolled);
    navbar.querySelectorAll("a:not(.flex)").forEach((link) => {
      link.classList.toggle("text-white", !isScrolled);
      link.classList.toggle("text-gray-800", isScrolled);
    });
    const logoText = navbar.querySelector(".logo-text");
    if (logoText) {
      logoText.classList.toggle("text-white", !isScrolled);
      logoText.classList.toggle("text-gray-800", isScrolled);
    }
    backToTop.classList.toggle("opacity-0", !isScrolled);
    backToTop.classList.toggle("invisible", !isScrolled);
    backToTop.classList.toggle("opacity-100", isScrolled);
    backToTop.classList.toggle("visible", isScrolled);
  };

  window.addEventListener("scroll", toggleNavbar, { passive: true });
  toggleNavbar();
};

const setupBackToTop = () => {
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
};

const setupMobileMenu = () => {
  const menuBtn = document.getElementById("menu-btn");
  const closeMenuBtn = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");
  if (!menuBtn || !closeMenuBtn || !mobileMenu || !overlay) return;

  const toggleMenu = (show) => {
    mobileMenu.classList.toggle("active", show);
    overlay.classList.toggle("active", show);
    document.body.style.overflow = show ? "hidden" : "";
  };

  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu(true);
  });
  closeMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu(false);
  });
  overlay.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu(false);
  });

  mobileMenu.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      toggleMenu(false);
      const target = document.querySelector(link.getAttribute("href"));
      if (target)
        setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 300);
    });
  });
};

const setupScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".animate-fadeInUp, .animate-fadeIn")
    .forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.style.opacity = "1";
      } else {
        observer.observe(element);
      }
    });
};

const setupPreviewModal = () => {
  const modal = document.getElementById("preview-modal");
  const modalIframe = document.getElementById("modal-iframe");
  const modalClose = document.getElementById("modal-close");
  const modalLoading = document.getElementById("modal-loading");
  const modalTitle = document.getElementById("modal-title");
  if (!modal || !modalIframe || !modalClose || !modalLoading || !modalTitle)
    return;

  const openModal = (url, title) => {
    modal.classList.add("active");
    modal.setAttribute("aria-modal", "true");
    modalLoading.style.display = "block";
    modalTitle.textContent = title || "Xem trước";
    modalIframe.src = url;
    modalIframe.onload = () => (modalLoading.style.display = "none");
    modalIframe.onerror = () => {
      modalLoading.innerHTML = `<p class="text-red-600">Không load được. Vui lòng <a href="${url}" target="_blank" class="underline">xem trực tiếp</a>.</p>`;
    };
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("active");
    modal.removeAttribute("aria-modal");
    modalIframe.src = "";
    modalLoading.style.display = "block";
    modalTitle.textContent = "";
    document.body.style.overflow = "";
  };

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
  });

  document.querySelectorAll(".preview-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.url;
      const title = btn.dataset.title;
      if (url) openModal(url, title);
    });
    btn.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const url = btn.dataset.url;
        const title = btn.dataset.title;
        if (url) openModal(url, title);
      }
    });
  });
};

const setupIframes = () => {
  const containers = document.querySelectorAll(".iframe-container");
  let activeContainer = null;

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting && window.innerWidth >= 768) {
          const container = entry.target;
          if (!container.querySelector(".demo-iframe")) loadIframe(container);
          observer.unobserve(container);
        }
      }),
    { rootMargin: "100px", threshold: 0.05 }
  );

  const loadIframe = (container) => {
    if (!container.dataset.src) {
      container.innerHTML = `<p class="p-4 text-center text-red-600">URL xem trước không hợp lệ.</p>`;
      return;
    }
    if (!container.querySelector(".demo-iframe")) {
      const src = `${container.dataset.src}?view=desktop`;
      const iframe = createElement(`
        <iframe class="demo-iframe absolute top-0 left-0 w-full h-full" loading="lazy" fetchpriority="low" scrolling="yes"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock"
                style="visibility: hidden; transform-origin: 0 0;"></iframe>
      `);
      iframe.src = src;
      iframe.onerror = () => {
        container.innerHTML = `<p class="p-4 text-center text-red-600">Không load được. Vui lòng <a href="${container.dataset.src}" target="_blank" class="underline">xem trực tiếp</a>.</p>`;
      };
      container.appendChild(iframe);

      iframe.addEventListener("load", () => {
        const scale = container.clientWidth / 1300;
        iframe.style.width = "1300px";
        iframe.style.height = "800px";
        iframe.style.transform = `scale(${scale})`;
        container.style.height = `${800 * scale}px`;
        iframe.style.visibility = "visible";
        container.classList.remove("loading");
        const placeholder = container.querySelector(".iframe-placeholder");
        if (placeholder) {
          placeholder.style.opacity = "0";
          setTimeout(() => placeholder.remove(), 300);
        }
      });
    }
  };

  containers.forEach((container) => {
    if (window.innerWidth >= 768) observer.observe(container);

    const overlay = container.querySelector(".iframe-overlay");
    if (overlay) {
      let touchStartTime = 0,
        lastTapTime = 0,
        touchStartX = 0,
        touchStartY = 0;

      const handleClick = (e) => {
        e.preventDefault();
        const currentTime = Date.now();
        const isDoubleTap = currentTime - lastTapTime < 300;
        lastTapTime = currentTime;

        if (isDoubleTap) {
          const detailsBtn = container.querySelector("a");
          if (detailsBtn) {
            const url = detailsBtn.getAttribute("href");
            if (url.startsWith("#")) {
              const target = document.querySelector(url);
              if (target) target.scrollIntoView({ behavior: "smooth" });
            } else {
              window.open(url, "_blank");
            }
          }
          if (activeContainer === container) resetActiveContainer();
        } else {
          if (activeContainer && activeContainer !== container)
            resetActiveContainer();
          if (!container.querySelector(".demo-iframe")) loadIframe(container);
          const iframe = container.querySelector(".demo-iframe");
          if (iframe) {
            activeContainer = container;
            iframe.style.pointerEvents = "auto";
            overlay.style.opacity = "0";
            overlay.style.pointerEvents = "none";
            container.classList.add("iframe-active");
            iframe.focus();
          }
        }
      };

      const handleTouchStart = (e) => {
        touchStartTime = Date.now();
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      };

      const handleTouchEnd = (e) => {
        const touchEndTime = Date.now();
        if (touchEndTime - touchStartTime < 300) {
          const touchEndX = e.changedTouches[0].clientX;
          const touchEndY = e.changedTouches[0].clientY;
          if (
            Math.abs(touchEndX - touchStartX) < 10 &&
            Math.abs(touchEndY - touchStartY) < 10
          ) {
            handleClick(e);
          }
        }
      };

      overlay.addEventListener("click", handleClick);
      overlay.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      overlay.addEventListener("touchend", handleTouchEnd, { passive: false });
      overlay.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick(e);
        }
      });
    }
  });

  const resetActiveContainer = () => {
    if (activeContainer) {
      const iframe = activeContainer.querySelector(".demo-iframe");
      const overlay = activeContainer.querySelector(".iframe-overlay");
      if (iframe && overlay) {
        iframe.style.pointerEvents = "none";
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "auto";
        activeContainer.classList.remove("iframe-active");
      }
      activeContainer = null;
    }
  };

  document.addEventListener("click", (e) => {
    if (activeContainer && !activeContainer.contains(e.target))
      resetActiveContainer();
  });

  const handleResize = debounce(() => {
    containers.forEach((container) => {
      const iframe = container.querySelector(".demo-iframe");
      if (iframe && iframe.style.visibility !== "hidden") {
        const scale = container.clientWidth / 1300;
        iframe.style.transform = `scale(${scale})`;
        container.style.height = `${800 * scale}px`;
      }
    });
  }, 100);

  window.addEventListener("resize", handleResize, { passive: true });
};

/* Screen Size Change Handler */
const setupScreenSizeChangeHandler = () => {
  const breakpoints = {
    mobile: "(max-width: 767px)",
    ipad: "(min-width: 768px) and (max-width: 1024px)",
    pc: "(min-width: 1025px)",
  };

  let currentDevice = null;
  let isReloading = false;

  const getDeviceCategory = () => {
    if (window.matchMedia(breakpoints.mobile).matches) return "mobile";
    if (window.matchMedia(breakpoints.ipad).matches) return "ipad";
    if (window.matchMedia(breakpoints.pc).matches) return "pc";
    return null;
  };

  const handleDeviceChange = () => {
    if (isReloading) return;
    const newDevice = getDeviceCategory();
    if (newDevice && newDevice !== currentDevice) {
      isReloading = true;
      currentDevice = newDevice;
      window.location.href = window.location.href;
    }
  };

  currentDevice = getDeviceCategory();
  const debouncedHandleDeviceChange = debounce(handleDeviceChange, 300);

  window.addEventListener("resize", debouncedHandleDeviceChange, {
    passive: true,
  });
  window.addEventListener(
    "orientationchange",
    () => setTimeout(handleDeviceChange, 100),
    { passive: true }
  );

  window.addEventListener("unload", () => {
    window.removeEventListener("resize", debouncedHandleDeviceChange);
    window.removeEventListener("orientationchange", handleDeviceChange);
  });
};

/* Source Protection Functions */
const protectSourceCode = () => {
  let isWarningDisplayed = false;
  let securityViolationCount = 0;
  const maxViolations = 3;
  const securityWarning = document.getElementById("security-warning");
  const closeWarningBtn = document.getElementById("close-warning");
  const mainContent = document.querySelector(".bg-light");

  const showSecurityWarning = () => {
    if (securityWarning) {
      securityWarning.style.display = "flex";
      mainContent?.classList.add("content-blur");
      document.body.style.overflow = "hidden";
    } else {
      console.warn("Element #security-warning not found");
    }
  };

  const closeSecurityWarning = () => {
    if (securityWarning) {
      securityWarning.style.display = "none";
      mainContent?.classList.remove("content-blur");
      document.body.style.overflow = "";
    }
  };

  if (closeWarningBtn)
    closeWarningBtn.addEventListener("click", closeSecurityWarning);

  const handleSecurityViolation = (action) => {
    securityViolationCount++;
    console.warn(
      `Security violation detected: ${action}. Count: ${securityViolationCount}/${maxViolations}`
    );
    if (securityViolationCount >= maxViolations) {
      showSecurityWarning();
    } else {
      showWarning();
    }
    return false;
  };

  const showWarning = () => {
    if (isWarningDisplayed) return;
    isWarningDisplayed = true;
    const warning = document.createElement("div");
    warning.innerHTML = `
      <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.3); z-index: 9999; text-align: center;">
        <p style="color: #0B3C5D; font-size: 16px; margin-bottom: 10px;">Vui lòng không cố gắng truy cập mã nguồn hoặc DevTools!</p>
        <button id="close-small-warning" style="padding: 8px 16px; background: #1E88E5; color: white; border: none; border-radius: 5px; cursor: pointer;">Đóng</button>
      </div>
    `;
    document.body.appendChild(warning);
    const closeBtn = document.getElementById("close-small-warning");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        warning.remove();
        isWarningDisplayed = false;
      });
    }
    setTimeout(() => {
      if (warning.parentNode) {
        warning.remove();
        isWarningDisplayed = false;
      }
    }, 3000);
  };

  document.addEventListener(
    "keydown",
    (e) => {
      const blockedShortcuts = [
        { key: "F12", code: 123 },
        { ctrl: true, shift: true, key: "I" },
        { ctrl: true, shift: true, key: "J" },
        { ctrl: true, shift: true, key: "C" },
        { ctrl: true, key: "U" },
        { ctrl: true, shift: true, key: "K" },
      ];
      for (const shortcut of blockedShortcuts) {
        if (
          (shortcut.key === e.key || shortcut.code === e.keyCode) &&
          (!shortcut.ctrl || e.ctrlKey) &&
          (!shortcut.shift || e.shiftKey)
        ) {
          e.preventDefault();
          handleSecurityViolation(`Blocked shortcut: ${shortcut.key}`);
          return false;
        }
      }
    },
    { capture: true, passive: false }
  );

  document.addEventListener(
    "contextmenu",
    (e) => {
      if (
        e.target.closest(
          "#mobile-menu, .modal, .preview-btn, a, input, textarea"
        )
      ) {
        return true;
      }
      e.preventDefault();
      handleSecurityViolation("Right-click blocked");
      return false;
    },
    { capture: true, passive: false }
  );

  document.addEventListener(
    "selectstart",
    (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return true;
      e.preventDefault();
      return false;
    },
    { capture: true, passive: false }
  );

  document.addEventListener(
    "copy",
    (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return true;
      e.preventDefault();
      handleSecurityViolation("Copy blocked");
      return false;
    },
    { capture: true, passive: false }
  );

  const detectDevTools = () => {
    const checkDevToolsBySize = () => {
      const threshold = 200;
      if (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
      ) {
        handleSecurityViolation("DevTools detected by window size");
      }
    };

    const checkDevToolsByDebugger = () => {
      const startTime = performance.now();
      console.log(
        "%c",
        "background: url(data:image/png;base64,iVBORw...); background-repeat: no-repeat; background-size: cover; padding: 400px;"
      );
      console.clear();
      const endTime = performance.now();
      if (endTime - startTime > 100) {
        handleSecurityViolation("DevTools detected by console timing");
      }
    };

    const checkDevToolsByDebug = () => {
      let devToolsOpened = false;
      const handler = () => {
        devToolsOpened = true;
      };
      debugger;
      window.addEventListener("devtoolschange", handler);
      setTimeout(() => {
        window.removeEventListener("devtoolschange", handler);
        if (devToolsOpened) {
          handleSecurityViolation("DevTools detected by debugger");
        }
      }, 100);
    };

    const checkDevToolsByProfile = () => {
      try {
        console.profile();
        console.profileEnd();
        if (console.clear) console.clear();
      } catch (e) {}
    };

    setInterval(() => {
      checkDevToolsBySize();
      checkDevToolsByDebugger();
      checkDevToolsByProfile();
      if (Math.random() < 0.1) checkDevToolsByDebug();
    }, 1000);
  };

  const obfuscateCode = () => {
    const decoyFunctions = [
      function _0x1a2b3c() {
        return Math.random() * 1000;
      },
      function _0x4d5e6f() {
        return new Date().getTime();
      },
      function _0x7g8h9i() {
        return window.innerWidth * window.innerHeight;
      },
    ];
    for (let i = 0; i < 50; i++) {
      const randomName = `_${Math.random().toString(36).substring(2, 8)}`;
      window[randomName] = decoyFunctions[i % decoyFunctions.length];
    }
    Object.defineProperty(window, "_securityLayer", {
      get: () => {
        handleSecurityViolation("Attempted to access protected property");
        return undefined;
      },
      configurable: false,
    });
  };

  const disableConsole = () => {
    const originalConsole = { ...console };
    const consoleProxy = new Proxy(console, {
      get: (target, prop) => {
        if (["log", "info", "warn", "error", "debug", "dir"].includes(prop)) {
          return (...args) => {
            const stackTrace = new Error().stack || "";
            if (
              stackTrace.includes("react") ||
              stackTrace.includes("webpack")
            ) {
              return originalConsole[prop].apply(console, args);
            }
            handleSecurityViolation(`Console.${prop} accessed`);
            return undefined;
          };
        }
        return target[prop];
      },
    });
    window.console = consoleProxy;
  };

  const monitorDOM = () => {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length) {
          for (const node of mutation.addedNodes) {
            if (
              node.nodeType === 1 &&
              (node.id?.includes("inspector") ||
                node.id?.includes("console") ||
                node.className?.includes("devtools"))
            ) {
              handleSecurityViolation("DevTools element detected in DOM");
              break;
            }
          }
        }
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  };

  const protectSourceElements = () => {
    document.querySelectorAll("script, style").forEach((element) => {
      element.setAttribute("data-protected", "true");
      if (element.tagName === "SCRIPT" && !element.src) {
        element.textContent = `/* Protected Code */\n${element.textContent}`;
      }
    });
  };

  const preventDebugging = () => {
    setInterval(() => {
      Function("debugger")();
    }, 3000);
  };

  detectDevTools();
  obfuscateCode();
  disableConsole();
  monitorDOM();
  protectSourceElements();
  preventDebugging();
  document.body.classList.add("protected-content");
};

/* Initialization */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderTemplateCategories();
  renderTemplates();
  setupNavbarScroll();
  setupBackToTop();
  setupMobileMenu();
  setupScrollAnimations();
  setupIframes();
  setupPreviewModal();
  setupScreenSizeChangeHandler();
  protectSourceCode();
});

(function () {
  document.onkeydown = (e) => {
    if (
      e.keyCode === 123 ||
      (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
      (e.ctrlKey && e.keyCode === 85)
    )
      return false;
  };
  document.oncontextmenu = () => false;
})();
