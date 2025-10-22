// script.js
document.querySelectorAll('.proyecto').forEach(p => {
  p.addEventListener('click', () => {
    alert(`Has hecho clic en ${p.textContent}`);
  });
});
