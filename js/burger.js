document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.navbar__nav-links');

  if (!burger || !navLinks) return;

  // Открытие/закрытие меню
  burger.addEventListener('click', (e) => {
    e.stopPropagation(); // чтобы не сработал глобальный обработчик
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
  });

  // Закрытие при клике вне меню
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
      navLinks.classList.remove('active');
      burger.classList.remove('active');
    }
  });

  // Закрытие при клике на ссылку
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      burger.classList.remove('active');
    });
  });
});

