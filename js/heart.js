document.addEventListener('DOMContentLoaded', () => {
  let clickCount = 0;
  const counter = document.getElementById('clickCounter');

  if (!counter) return; // страховка

  document.addEventListener('click', (e) => {
    // Если не хочешь считать клики по самому счётчику:
    if (counter.contains(e.target)) return;

    clickCount++;
    counter.textContent = `Кликов: ${clickCount}`;
  });
});
