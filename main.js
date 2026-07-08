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
