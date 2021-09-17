let before = document.querySelector(".before")
let after = document.querySelector(".after")
let random = document.querySelector(".randomBtn")

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
tab.push(claireFisher ,robertSmith, johnnyDepp, annaJohnsson, clintEastwood)

// Associate Array to index
// forEach click, l'index (suivant) va modifier toutes les données des variables présentes into loadObject()

// function loadObject(){
//   tab.forEach(element => {
//     let profil1 = document.querySelector("#profil").innerHTML = tab[0].profil
//     let name1 = document.querySelector(".name").innerHTML = tab[0].name
//     let jobTitle1 = document.querySelector(".jobTitle").innerHTML = tab[0].job
//     let description1 = document.querySelector(".description").innerHTML = tab[0].description
//   });
// }

// before & after

// function Buttons(){
//   if(before.getAttribute('listener') == before){
//     console.log('before');
//   }
//   else if (EventTarget == after){
//     console.log('after');
//   }
// }


// f() to call Objects into HTML

// random.addEventListener('click', ()=>{
//   loadObject()
// })

// -------------------------------------------------
// objects 1
// DOMContentLoaded
// addEventListener() 1
// array.length
// textContent 1
