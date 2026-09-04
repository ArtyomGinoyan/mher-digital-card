(function () {
  "use strict";
  var root = document.documentElement;

  function dismiss() {
    root.classList.add("intro-dismissed");
    window.removeEventListener("scroll", dismiss);
  }

  window.addEventListener("scroll", dismiss, { passive: true, once: true });

  var intro = document.querySelector(".intro-section");
  if (intro) {
    intro.addEventListener("click", dismiss);
  }
})();
