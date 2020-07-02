export default {
  initialPresentation: () => {
    const presentation = document.querySelector('.initial-content');
    const presentationTitle = document.querySelector('.initial-content h1');

    presentation.addEventListener('click', () => {
      presentation.classList.toggle('active');
      
      setTimeout(() => {
        presentation.style.display = 'none'
        presentationTitle.style.display = 'none'
      }, 1000);
    });
  },
}
