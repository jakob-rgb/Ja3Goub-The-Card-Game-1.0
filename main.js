const menuWrap = document.querySelector('.menu-wrap');

// Subtle parallax effect on mouse move
document.addEventListener('mousemove', (e) => {
  if (menuWrap) {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 80;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 80;

    menuWrap.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }
});

// Reset tilt on mouse leave
document.addEventListener('mouseleave', () => {
  if (menuWrap) {
    menuWrap.style.transform = `rotateY(0deg) rotateX(0deg)`;
  }
});

function triggerAction(actionName) {
  console.log(`[Ja3Goub Engine] Executing action: ${actionName}`);
}
