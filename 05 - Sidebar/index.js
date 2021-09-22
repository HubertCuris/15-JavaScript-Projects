const navbar = document.querySelector('aside')
const toggle = document.querySelector('.toggleBtn')
const close = document.querySelector('#closeBtn')


toggle.addEventListener('click', function Toggle(){
  navbar.classList.toggle('asideShow')
  if(window.innerWidth <= '675'){
    toggle.classList.add('toggleHide')
  }
})
close.addEventListener('click', function Toggle(){
  navbar.classList.remove('asideShow')
  toggle.classList.remove('toggleHide')
})

/* bof bof */

// if(window.innerWidth >= '676'){
//   toggle.addEventListener('click', function Toggle(){
//     navbar.classList.toggle('asideShow')
//   })
//   close.addEventListener('click', function Toggle(){
//     navbar.classList.remove('asideShow')
//   })
// }

// if(window.innerWidth <= '675'){
//   toggle.addEventListener('click', function Toggle(){
//     navbar.classList.add('asideShow')
//     toggle.classList.add('toggleHide')
//   })
//   close.addEventListener('click', function Closing(){
//       navbar.classList.remove('asideShow')
//       toggle.classList.remove('toggleHide')
//     })
// }