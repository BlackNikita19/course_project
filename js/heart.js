 document.addEventListener('DOMContentLoaded', () => {
      const burger = document.querySelector('.burger');
      const navLinks = document.querySelector('.navbar__nav-links');
      const counter = document.getElementById('clickCounter');
      let clickCount = 0;

      if (burger && navLinks) {
        burger.addEventListener('click', (e) => {
          e.stopPropagation(); // чтобы глобальный обработчик не закрыл меню
          navLinks.classList.toggle('active');
          burger.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
          if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
          }
        });

        navLinks.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
          });
        });
      }

      if (counter) {
        document.body.addEventListener('click', (e) => {
          // игнорируем клики по меню и бургеру
          if (counter.contains(e.target) || burger.contains(e.target) || navLinks.contains(e.target)) return;
          clickCount++;
          counter.textContent = `Кликов: ${clickCount}`;
        });
      }
    });
