const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

const revealOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealOnScroll.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealOnScroll.observe(item));

const cookieBanner = document.getElementById("cookieBanner");
const acceptCookies = document.getElementById("acceptCookies");
const rejectCookies = document.getElementById("rejectCookies");

if (cookieBanner) {
  const cookieChoice = localStorage.getItem("primeGrowthCookieChoice");

  if (!cookieChoice) {
    setTimeout(() => {
      cookieBanner.classList.add("show");
    }, 700);
  }

  if (acceptCookies) {
    acceptCookies.addEventListener("click", () => {
      localStorage.setItem("primeGrowthCookieChoice", "accepted");
      cookieBanner.classList.remove("show");
    });
  }

  if (rejectCookies) {
    rejectCookies.addEventListener("click", () => {
      localStorage.setItem("primeGrowthCookieChoice", "rejected");
      cookieBanner.classList.remove("show");
    });
  }
}
