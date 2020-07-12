export default {
  forward: (cards) => {
    const presentation = document.querySelector('.initial-content');

    const isOnFocus = presentation.style.display === 'none';

    if(isOnFocus) {
      const lastCard = cards.length - 1;
      const active = 'active';
      let findActive = false;
    
      cards.forEach((card, index) => {
        if(card.classList.contains(active) && !findActive){
    
          card.classList.toggle(active);
    
          if (index === lastCard) {
            cards[0].classList.toggle(active);
          } else {
            cards[index + 1].classList.toggle(active);
          }
    
          findActive = true;
        }
      });
    }
  },
  
  backward: (cards) => {
    const presentation = document.querySelector('.initial-content');

    const isOnFocus = presentation.style.display === 'none';

    if(isOnFocus) {
      const lastCard = cards.length - 1;
      const active = 'active';
      let findActive = false;
    
      cards.forEach((card, index) => {
        if(card.classList.contains(active) && !findActive){
    
          card.classList.toggle(active);
    
          if (index === 0) {
            cards[lastCard].classList.toggle(active);
          } else {
            cards[index - 1].classList.toggle(active);
          }
          findActive = true;
        }
      });
    }
  },

  cardingForward: (cards) => {
    const presentation = document.querySelector('.initial-content');

    const isOnFocus = presentation.style.display === 'none';

    if(isOnFocus) {
      const lastCard = cards.length - 1;
      const active = 'active';
      let findActive = false;
      let zIndex = lastCard + 20;
      
      cards.forEach((card, index) => {
        const actualStyle = card.style.transform.split('translateX')[0];

        console.log(actualStyle)

        let cardToSelect;
        if(card.classList.contains(active) && !findActive){
    
          card.classList.toggle(active);
          card.style.transform = actualStyle + ' translateX(80vh)';
          
          
          setTimeout(() => {
            card.style.transform = actualStyle + ' translateX(0)';
            card.style.zIndex = zIndex;
          }, 550);
    
          if (index === lastCard) {
            cards[0].classList.toggle(active);
          } else {
            cards[index + 1].classList.toggle(active);
          }

          cardToSelect = index === lastCard ? 0 : index + 1;
          
          for(let i=0; i<lastCard; ++i) {
            if(cardToSelect > lastCard) {
              cardToSelect = 0;
            }
            cards[cardToSelect++].style.zIndex = zIndex--;
          }   
          
          findActive = true;
        }
      });
    }
  },

  cardingBackward: (cards) => {
    const presentation = document.querySelector('.initial-content');

    const isOnFocus = presentation.style.display === 'none';

    if(isOnFocus) {
      const lastCard = cards.length - 1;
      const active = 'active';
      let findActive = false;
      let zIndex = lastCard+20;
      
      cards.forEach((card, index) => {
        const actualStyle = index === 0 ?
        cards[lastCard]
        .style
        .transform
        .split(' ')[0] :
        cards[index - 1]
        .style
        .transform.
        split(' ')[0] ;

        let cardToSelect;
        if(card.classList.contains(active) && !findActive){
    
          card.classList.toggle(active);
          
          if (index === 0) {
            cards[lastCard].classList.toggle(active);
            cards[lastCard].style.transform = actualStyle + ' translateX(-80vh)';
            cards[lastCard].style.zIndex = 1 +zIndex + lastCard;

            setTimeout(() => {
              cards[lastCard].style.transform = actualStyle + ' translateX(0)';
            }, 500);
          } else {
            cards[index - 1].classList.toggle(active);
            cards[index - 1].style.transform = actualStyle + ' translateX(-80vh)';
            cards[index - 1].style.zIndex = 1 +zIndex + lastCard;
            
            setTimeout(() => {
              cards[index - 1].style.transform = actualStyle + ' translateX(0)';
            }, 500);
          }

          cardToSelect = index > lastCard ? 0 : index;
          
          for(let i=0; i<lastCard; ++i) {
            if(cardToSelect > lastCard) {
              cardToSelect = 0;
            }
            cards[cardToSelect++].style.zIndex = zIndex--;
          }   
          
          findActive = true;
        }
      });
    }
  }
}