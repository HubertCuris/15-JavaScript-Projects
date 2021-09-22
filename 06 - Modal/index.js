let openBtn = document.querySelector('#openBtn')
let closeBtn = document.querySelector('#closeBtn')
let modal = document.querySelector('.modal')
let menu = document.querySelector('.menu')
let section = document.querySelector('section')

openBtn.addEventListener('click', function(){
  modal.classList.add('modalShow')
  section.classList.add('backgroundModal')
  menu.classList.add('backgroundModal')
})
closeBtn.addEventListener('click', function(){
  modal.classList.remove('modalShow')
  section.classList.remove('backgroundModal')
  menu.classList.remove('backgroundModal')
})