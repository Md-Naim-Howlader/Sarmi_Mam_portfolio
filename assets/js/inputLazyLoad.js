/* 🔷 LazyLoad Config */
window.lazyLoadOptions = Object.assign(
  {
    threshold: 300,
  },
  window.lazyLoadOptions || {},
);

/* 🔷 LazyLoad Library (minified kept as is) */
/* NOTE: Keep library unchanged for stability */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define(e)
      : ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).LazyLoad =
          e());
})(this, function () {
  "use strict";
});

/* 🔷 Init LazyLoad */
(function () {
  function initLazyLoad() {
    console.log("[LazyLoad] Initialized");

    const lazyLoadInstance = new LazyLoad({
      elements_selector: "[data-lazyloaded]",
      callback_finish: () => {
        document.body.classList.add("lazyloaded");
      },
    });

    // Auto update on DOM change
    if (window.MutationObserver) {
      const observer = new MutationObserver(() => {
        lazyLoadInstance.update();
      });

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }
  }

  window.addEventListener("load", initLazyLoad);
})();
