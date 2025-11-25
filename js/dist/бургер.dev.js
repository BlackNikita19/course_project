"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var navLinks = document.querySelector('.navbar__nav-links');
  burger.addEventListener('click', function (e) {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
  });
}); // Закрытие при клике вне меню

document.addEventListener('click', function (e) {
  if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
    navLinks.classList.remove('active');
    burger.classList.remove('active');
  }
}); // Закрытие при клике на ссылку

navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('active');
    burger.classList.remove('active');
  });
});