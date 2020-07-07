export default {
  initialPresentation: () => {
    const presentation = document.querySelector('.initial-content');
    const presentationTitle = document.querySelector('.initial-content h1');

    presentation.addEventListener('click', () => {
      if (!presentation.classList.contains('active') && presentation.style.display !== 'none') {
        presentation.classList.add('active');
        setTimeout(() => {
          presentation.style.display = 'none';
          presentationTitle.style.display = 'none';
        }, 1000);
      }
    });

    window.addEventListener('keypress', () => {
      if (!presentation.classList.contains('active') && presentation.style.display !== 'none') {
        presentation.classList.add('active');
        setTimeout(() => {
          presentation.style.display = 'none';
          presentationTitle.style.display = 'none';
        }, 1000);
      }
    })
  },
}
