let links = document.querySelector('.links')
let nav = document.querySelector('.navContainer')
const btn = document.querySelector('button')


btn.addEventListener('click', function Toggle(){
  if(nav.style.height != '230px'){
    nav.style.height = '230px'
  }
  else{
    nav.style.height = '72px'
  }
})

window.addEventListener('resize',function Resize(){
    if(window.innerWidth >= 800){
      nav.style.height = '72px'
    }
  })