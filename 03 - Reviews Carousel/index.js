// So some people say to use object and then, makes correction without it... thanks !
// need to do this again without object but just array
// and then just object

let before = document.querySelector(".before")
let after = document.querySelector(".after")
let random = document.querySelector(".randomBtn")

let profil = document.querySelector("#profil")
let name = document.querySelector(".name")
let jobTitle = document.querySelector(".jobTitle")
let description = document.querySelector(".description")

// Object Constructor

function Person(profil, name, job, description){
  this.profil = profil
  this.name = name
  this.job = job
  this.description = description
}

// Objects instantiation ?

let claireFisher = new Person("./images/claire Fisher.jpg", "Claire Fisher", "Funeral Director", "It was very nice to get off work for once, and be in this heavenly hotel. Very beautiful landscape. Great holidays !!!! I would recommend it!")
let robertSmith = new Person("./images/robert Smith.jpg", "Robert Smith", "The Cure's singer", "I have a wonderful haircut")
let johnnyDepp = new Person("./images/johnny Depp.jpg", "Johnny Depp", "Actor", "Why are you even asking ?")
let annaJohnsson = new Person("./images/anna johnsson.jpg", "Anna Johnsson", "Barista", "This ain't funny when you start learning from scratch")
let clintEastwood = new Person("./images/clint Eastwood.jpg", "Clint Eastwood", "CowBoy", "Meh!")

// Make an Array

let tab = new Array()
tab.push(claireFisher, robertSmith, johnnyDepp, annaJohnsson, clintEastwood)

// ---------------------------------

// set init item
let currentItem = 0

// Set start item

function CurrentPerson() {
  const item = tab[currentItem]
  profil.src = item.profil
  name.textContent = item.name
  jobTitle.textContent = item.jobTitle
  description.textContent = item.description
}

// load init item

window.addEventListener('DOMContentLoaded', function(){
  CurrentPerson()
})


after.addEventListener('click', function(){
  currentItem++
  if(currentItem > tab.length -1){
    currentItem = 0
  }
  CurrentPerson(currentItem)
})
before.addEventListener('click', function(){
  currentItem--
  if(currentItem < 0){
    currentItem = tab.length -1
  }
  CurrentPerson(currentItem)
})

/* RANDOM */

random.addEventListener('click', function(){
  let currentItem = Math.floor(Math.random()*tab.length)
  const item = tab[currentItem]
  profil.src = item.profil
  name.textContent = item.name
  jobTitle.textContent = item.jobTitle
  description.textContent = item.description
})
