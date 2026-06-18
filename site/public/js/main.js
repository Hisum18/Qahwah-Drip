/* Qahwah Drip — site interactions */
(function () {
  "use strict";
  var header = document.querySelector(".site-header");
  var isInner = document.body.classList.contains("inner-page");

  /* Sticky header: solid when scrolled (always solid on inner pages) */
  function onScroll() {
    header.classList.toggle("is-solid", isInner || window.scrollY > 40);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile nav */
  var toggle = document.querySelector(".nav__toggle");
  var panel = document.querySelector(".nav__links");
  var scrim = document.querySelector(".nav-scrim");

  function setNav(open) {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open) {
      var first = panel.querySelector("a");
      if (first) first.focus();
    }
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      setNav(!document.body.classList.contains("nav-open"));
    });
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setNav(false); });
    });
    if (scrim) scrim.addEventListener("click", function () { setNav(false); toggle.focus(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        setNav(false); toggle.focus();
      }
    });
  }

  /* Reveal on scroll */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Year + today's hours highlight */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
  var todayRow = document.querySelector(".hours [data-day='" + new Date().getDay() + "']");
  if (todayRow) todayRow.classList.add("today");

  /* Placeholder links (social + others) shouldn't jump to top */
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });

  /* Contact form (demo handler — no backend yet) */
  var form = document.querySelector(".js-contact");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("[type=submit]");
      var original = btn.textContent;
      btn.textContent = "Thank you — we'll be in touch!";
      btn.disabled = true;
      form.reset();
      setTimeout(function () { btn.textContent = original; btn.disabled = false; }, 3500);
    });
  }
})();
