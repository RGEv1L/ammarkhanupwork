/* Minimal site JS: obfuscated email assembly, footer year, work filters. */
(function () {
  "use strict";

  /* Email is assembled at runtime from fragments so the address never
     appears as a scrapable string in the HTML or JS source. */
  var u = ["kh", "anam", "mar", "50"].join("");
  var d = ["hot", "mail"].join("") + "." + "com";
  var addr = u + "@" + d;

  document.querySelectorAll("[data-email-link]").forEach(function (a) {
    a.setAttribute("href", "mailto:" + addr);
  });
  document.querySelectorAll("[data-email-text]").forEach(function (el) {
    el.textContent = addr;
  });

  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  /* Credentials: certificate lightbox (vanilla, keyboard-dismissable). */
  var showBtns = document.querySelectorAll(".show-cert[data-cert]");
  if (showBtns.length) {
    var overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.hidden = true;
    overlay.innerHTML = '<img alt=""><p class="lightbox-hint">Click anywhere or press Esc to close</p>';
    document.body.appendChild(overlay);
    var overlayImg = overlay.querySelector("img");
    var lastFocus = null;

    function closeBox() {
      overlay.hidden = true;
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }
    overlay.addEventListener("click", closeBox);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !overlay.hidden) closeBox();
    });
    showBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        lastFocus = btn;
        overlayImg.src = btn.getAttribute("data-cert");
        overlayImg.alt = btn.getAttribute("data-alt") || "Certificate";
        overlay.hidden = false;
        document.body.style.overflow = "hidden";
      });
    });
  }

  /* Work index: capability filter chips. */
  var chips = document.querySelectorAll(".chip[data-filter]");
  if (chips.length) {
    var cards = document.querySelectorAll(".card[data-tags]");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
        chip.setAttribute("aria-pressed", "true");
        var f = chip.getAttribute("data-filter");
        cards.forEach(function (card) {
          var show = f === "all" || card.getAttribute("data-tags").split(" ").indexOf(f) !== -1;
          card.classList.toggle("is-hidden", !show);
        });
      });
    });
  }
})();
