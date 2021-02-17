// Testimoni start

const testimoniArr = [
{id:1,
name: 'Mom',
img: '/img/mom.jpg',
message : `I Don't have a clue but i'll support him`},
{id:2,
name: 'Dad',
img: '/img/dad.jpg',
message : `IDGAF, but don't forget me after you got the salary`},
{id:3,
name: 'Big bro',
img: '/img/bro.jpg',
message : `Stop doing this and join my company`},
{id:4,
name: 'Lil sis',
img: '/img/lil_sis.jpg',
message : `I thought programmer is cool`},
{id:5,
name: 'My Girlfriend',
img: '/img/girlfriend.jpg',
message : `Why you include me? i'm only exist in your mind!`
}];

const left = document.querySelector('.left')
const right = document.querySelector('.right')
let names = document.querySelector('.testi-name')
let message = document.querySelector('.testi-message')
let image = document.querySelector('.testi-img')
counter = 0;


right.addEventListener('click' , ()=>{
counter++
if(counter >= testimoniArr.length ){
 counter = 0;
}
slider();
})

left.addEventListener('click' , ()=>{
counter--
if(counter < 0 ){
 counter = testimoniArr.length - 1;
}
slider();

})


function slider(){

names.textContent = testimoniArr[counter].name
message.textContent = testimoniArr[counter].message
image.style.backgroundImage = "url" + `(${testimoniArr[counter].img})`

console.log(counter);
}
// Testimoni End

// Tabs start

const container = document.querySelector('.containers');
const btns = document.querySelectorAll('.btn');
const section = document.querySelectorAll('.sect');

container.addEventListener('click',function(e){

 let id = e.target.dataset.id;

if (id){

btns.forEach((btn) =>{
 btn.classList.remove('active')
 e.target.classList.add('active')
})

section.forEach((sect) =>{
 sect.classList.remove('active')
 sect.classList.remove('act-flex')
})

const element = document.getElementById(id)
console.log(element.id);


// making diffrence in flex / block

if(element.id === 'testi'){
 element.classList.add('act-flex')
}else{
element.classList.add('active')}

} })

// hamburger menu

const burger = document.querySelector('.hamburger')
const navbar = document.querySelector('.navbar')
const nav = document.querySelector('.nav-container')

burger.addEventListener('click', ()=>{
burger.classList.toggle('show')
navbar.classList.toggle('show')
navbar.classList.add('anim')
})

