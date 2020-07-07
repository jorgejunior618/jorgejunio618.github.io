import functions from './functions.js'
export default {
  mainSlider: () => {
    const [ left, right ] = document.querySelectorAll('#arrow');
    const cards = document.querySelectorAll('.content ul li.card');
    
    window.addEventListener('keypress', (event) => {
      const keyPressed = event.key;

      if (keyPressed === 'ArrowLeft') functions.backward(cards);
      if (keyPressed === 'ArrowRight') functions.forward(cards);
    });
    
    left.addEventListener('click', () => functions.backward(cards));

    right.addEventListener('click', () => functions.forward(cards));
  }
}