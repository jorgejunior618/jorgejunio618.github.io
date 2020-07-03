import functions from './functions.js'

export default {
  mainSlider: () => {
    const [ left, right ] = document.querySelectorAll('#arrow');
    const cards = document.querySelectorAll('.content ul li.card');

    cards.forEach((card) => {
      if (card.classList.contains('active')) {
        card.style.display = 'flex';
        card.style.opacity = 1;
      }
    })

    left.addEventListener('click', () => functions.backward(cards));

    right.addEventListener('click', () => functions.forward(cards));
  }
}