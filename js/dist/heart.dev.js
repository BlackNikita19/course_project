"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var navLinks = document.querySelector('.navbar__nav-links');
  var counter = document.getElementById('clickCounter');
  var clickCount = 0;

  if (burger && navLinks) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation(); // чтобы глобальный обработчик не закрыл меню

      navLinks.classList.toggle('active');
      burger.classList.toggle('active');
    });
    document.addEventListener('click', function (e) {
      if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
      }
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
      });
    });
  }

  if (counter) {
    document.body.addEventListener('click', function (e) {
      // игнорируем клики по меню и бургеру
      if (counter.contains(e.target) || burger.contains(e.target) || navLinks.contains(e.target)) return;
      clickCount++;
      counter.textContent = "\u041A\u043B\u0438\u043A\u043E\u0432: ".concat(clickCount);
    });
  }
});