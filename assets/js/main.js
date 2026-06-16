document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger');
  var pageWrap = document.getElementById('page-wrap');

  if (hamburger && pageWrap) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('is-active');
      pageWrap.classList.toggle('offcanvas-open');
    });
  }

  var lottieContainer = document.getElementById('lottie-container');
  if (lottieContainer && typeof lottie !== 'undefined') {
    lottie.loadAnimation({
      container: lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/lottie.json',
      speed: 0.1
    });
  }
});
