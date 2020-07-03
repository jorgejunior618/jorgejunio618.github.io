export default {
  forward: (cards) => {
    const lastCard = cards.length - 1;
    const active = 'active';
    let findActive = false;
  
    cards.forEach((card, index) => {
      if(card.classList.contains(active) && !findActive){
        card.style.opacity = 0;
  
        setTimeout(() => {
          card.style.display = 'none';
        }, 500);
  
        card.classList.toggle(active);
  
        if (index === lastCard) {
          cards[0].classList.toggle(active);
  
          setTimeout(() => {
            cards[0].style.display = 'flex';
          }, 501);
  
          setTimeout(() => {
            cards[0].style.opacity = 1;
          }, 550);
        } else {
          cards[index + 1].classList.toggle(active);
  
          setTimeout(() => {
            cards[index + 1].style.display = 'flex';
          }, 501);
  
          setTimeout(() => {
            cards[index + 1].style.opacity = 1;
          }, 550);
        }
  
        findActive = true
      }
    })
  },
  
  backward: (cards) => {
    const lastCard = cards.length - 1;
    const active = 'active';
    let findActive = false;
  
    cards.forEach((card, index) => {
      if(card.classList.contains(active) && !findActive){
        card.style.opacity = 0;
  
        setTimeout(() => {
          card.style.display = 'none';
        }, 500);
  
        card.classList.toggle(active);
  
        if (index === 0) {
          cards[lastCard].classList.toggle(active);
  
          setTimeout(() => {
            cards[lastCard].style.display = 'flex';
          }, 501);
  
          setTimeout(() => {
            cards[lastCard].style.opacity = 1;
          }, 550);
        } else {
          cards[index - 1].classList.toggle(active);
          
          setTimeout(() => {
            cards[index - 1].style.display = 'flex';
          }, 501);
  
          setTimeout(() => {
            cards[index - 1].style.opacity = 1;
          }, 550);
        }
        findActive = true
      }
    })
  
  }
}