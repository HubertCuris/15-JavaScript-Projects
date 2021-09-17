let colorDisplay = document.querySelector('.colorDisplay')
let btn = document.querySelector('button')
let links = document.querySelectorAll('a')

function RandomColor(){
  return Math.floor(Math.random() * 16777215).toString(16)
}

btn.addEventListener('click', function ColorChanging(){
  const randomNb = RandomColor()
  document.body.style.backgroundColor = '#' + randomNb
  colorDisplay.innerHTML = 'Background color : ' + '#' + randomNb

  for (var i = 0; i < links.length; i++) {
    links[i].style.color = '#' + randomNb
  }
})