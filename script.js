/* Prime Growth LLC — site scripts (v2) */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  /* Mobile menu */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  function closeNav(returnFocus) {
    if (!nav || !toggle) return;
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    if (returnFocus) toggle.focus();
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { closeNav(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) closeNav(true); });
    window.addEventListener("resize", function () { if (window.innerWidth > 880) closeNav(false); });
  }

  /* Section reveal — content is visible by default if JS or observer is unavailable */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("visible"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("visible"); });
  }

  /* Cookie consent */
  var KEY = "pg_cookie_consent";
  var banner = document.getElementById("cookie-banner");
  function read() { try { return window.localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) {
    try { window.localStorage.setItem(KEY, v); window.localStorage.setItem(KEY + "_date", new Date().toISOString()); } catch (e) { /* storage blocked */ }
  }
  if (banner) {
    if (!read()) banner.hidden = false;
    banner.addEventListener("click", function (e) {
      var choice = e.target.getAttribute && e.target.getAttribute("data-cookie");
      if (!choice) return;
      save(choice === "accept" ? "accepted" : "rejected");
      banner.hidden = true;
    });
  }

  /* Current year */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
