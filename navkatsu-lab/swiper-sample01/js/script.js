/**
 * highlight.js
 */
window.addEventListener('DOMContentLoaded', function() {
  [].forEach.call(document.querySelectorAll('pre > code'), function(elem) {
    elem.textContent = elem.textContent.replace(/^[\r\n]+|[\r\n]+$/g, '');

    hljs.highlightBlock(elem);
    hljs.lineNumbersBlock(elem);
  });
}, false);

/**
 * swiper.js
 */
window.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    // speed: 600
  });
}, false);

