function imgSlider(anything) {
  const drink = document.querySelector('.starbucks');
  if (drink) {
    drink.src = anything;
  }
}

function changeCircleColor(color) {
  const panel = document.querySelector('.pink-panel');
  if (panel) {
    panel.style.background = color;
  }
}

const nav = document.querySelector('.main-nav');
if (nav) {
  nav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      event.preventDefault();
    }
  });
}
