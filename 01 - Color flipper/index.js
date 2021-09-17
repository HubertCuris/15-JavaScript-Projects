const backColor = ['rgb(128, 0, 60)', '#00b894', '#eb2f06', '#f39c12', '#192a56', '#c23616', '#ff4757', '#1e90ff', '#2ed573']
let colorDisplay = document.querySelector('.colorDisplay')
let btn = document.querySelector('button')
let links = document.querySelectorAll('a')

function RandomColor(){
  return Math.floor(Math.random() * backColor.length)
}

btn.addEventListener('click', function(){
  const randomNb = RandomColor()
  document.body.style.backgroundColor = backColor[randomNb]
  colorDisplay.innerHTML = 'Background color : ' + backColor[randomNb]
  
  for (var i = 0; i < links.length; i++) {
    links[i].style.color = backColor[randomNb]
  }
})