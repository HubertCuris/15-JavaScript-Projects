let currentBtn = document.getElementsByTagName('button')
const btns = document.querySelectorAll('button')
let number = document.querySelector('.number')
let count = 0

btns.forEach(btns => btns.addEventListener('click', function(e){

  if(e.currentTarget == currentBtn[0]){
    number.textContent = --count
  }
  else if(e.currentTarget == currentBtn[1]){
    number.textContent = count = 0
  }
  else if(e.currentTarget == currentBtn[2]){
    number.textContent = ++count
  }

  switch (count) {
    case 0:
      number.className = 'zero'
      break;
    
    case Math.sign(-1):
      number.className = 'negative'
      break
    
    case Math.sign(1):
      number.className = 'positive'
      break
  }
}));