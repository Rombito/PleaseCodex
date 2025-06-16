const cube = document.getElementById('cube');

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !cube.classList.contains('jump')) {
    cube.classList.add('jump');
    cube.addEventListener('animationend', () => {
      cube.classList.remove('jump');
    }, { once: true });
  }
});
