export default {
  forward: (cards) => {
    const lastCard = cards.length - 1;
    const active = 'active';
    let findActive = false;
  
    cards.forEach((card, index) => {
      if(card.classList.contains(active) && !findActive){
  
        card.classList.toggle(active);
  
        if (index === lastCard) {
          cards[0].classList.toggle(active);
  
          setTimeout(() => {
          }, 550);
        } else {
          cards[index + 1].classList.toggle(active);
  
          setTimeout(() => {
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
  
        card.classList.toggle(active);
  
        if (index === 0) {
          cards[lastCard].classList.toggle(active);
  
          setTimeout(() => {
          }, 550);
        } else {
          cards[index - 1].classList.toggle(active);
  
          setTimeout(() => {
          }, 550);
        }
        findActive = true
      }
    })
  
  }
}