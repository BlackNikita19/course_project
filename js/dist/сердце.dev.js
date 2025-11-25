"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var clickCount = 0;
  var counter = document.getElementById('clickCounter');
  if (!counter) return; // страховка

  document.addEventListener('click', function (e) {
    // Если не хочешь считать клики по самому счётчику:
    if (counter.contains(e.target)) return;
    clickCount++;
    counter.textContent = "\u041A\u043B\u0438\u043A\u043E\u0432: ".concat(clickCount);
  });
});