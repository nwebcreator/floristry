window.addEventListener(`scroll`, () => {
  const upButton = document.querySelector(`.scroll-up-link`);
  if (window.pageYOffset > 100) {
    upButton.classList.add(`scroll-up-link-showed`);
  } else {
    setTimeout(() => upButton.classList.remove(`scroll-up-link-showed`), 300);
  }
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.container');

for (let elm of elements) {
  observer.observe(elm);
}