const list = document.querySelectorAll('.content ul li');
let counter = 0;
let aux = 'asc';

setInterval(() => {
  if(counter <= 20 && aux === 'asc') {
    counter += 1;
    for(item of list) {
      item.style.top = counter + 'px';
    }
    if (counter >= 16) aux = 'dec';
  } else {
    counter -= 1;
    for(item of list) {
      item.style.top = counter + 'px';
    }
    if (counter <= 0) aux = 'asc';
  }
}, 80);