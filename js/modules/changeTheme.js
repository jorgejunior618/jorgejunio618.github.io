const themeSelector = document.querySelector('button#theme-selector');
const body = document.querySelector('body');

export default {
  themeChange: () => {
    body.classList.add('light');
    themeSelector.addEventListener('click', () => {
      body.classList.toggle('light');
    });
  },

  keyChangeTheme: () => {
    const body = document.querySelector('body');
    window.addEventListener('keypress', e => {
      if (e.key === 'n' || e.key === 'N') {
        body.classList.toggle('light');
      }
    })
  }
}
