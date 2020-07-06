const themeSelector = document.querySelector('input');
const body = document.querySelector('body');

export default {
  themeChange: () => {
    body.classList.add('light');
    themeSelector.addEventListener('click', (e) => {
      const checkActivate = e.target.checked;

      if (checkActivate) {
        body.classList.remove('light');
      } else {
        body.classList.add('light');
      }
    });
  }
}
