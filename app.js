// Testimoni start

const testimoniArr = [
{id:1,
name: '~Mom',
img: './img/mom.jpg',
message : `"I Don't have a clue but i'll support him "`},
{id:2,
name: '~Dad',
img: './img/dad.jpg',
message : `"IDGAF, but don't forget me after you got the salary"`},
{id:3,
name: '~Big bro',
img: './img/bro.jpg',
message : `"Stop doing this and join my company"`},
{id:4,
name: '~Lil sis',
img: './img/lil_sis.jpg',
message : `"I thought programmer is cool"`},
{id:5,
name: '~My Girlfriend',
img: './img/girlfriend.jpg',
message : `"Why you include me? i'm only exist in your mind!"`
}];

const left = document.querySelector('.left');
const right = document.querySelector('.right');
let names = document.querySelector('.testi-name');
let message = document.querySelector('.testi-message');
let image = document.querySelector('.testi-img');
counter = 0;


right.addEventListener('click' , ()=>{
  sliderAnimation();
  counter++
if(counter >= testimoniArr.length ){
 counter = 0;
}
slider();
})

left.addEventListener('click' , ()=>{
  sliderAnimation();
counter--
if(counter < 0 ){
 counter = testimoniArr.length - 1;
}
slider();
})

function slider(){
names.textContent = testimoniArr[counter].name;
message.textContent = testimoniArr[counter].message;
image.style.backgroundImage = "url" + `(${testimoniArr[counter].img})`;

console.log(counter);
}

function sliderAnimation(){
image.animate([{opacity:'0.1'},{opacity:'1'}],{duration:500,fill:'forwards'});
message.animate([{opacity:'0.1'},{opacity:'1'}],{duration:500,fill:'forwards'});
};

// Testimoni End

// Tabs start

const container = document.querySelector('.containers');
const btns = document.querySelectorAll('.btn');
const section = document.querySelectorAll('.sect');

container.addEventListener('click',function(e){

 let id = e.target.dataset.id;

if (id){

btns.forEach((btn) =>{
 btn.classList.remove('active');
 e.target.classList.add('active');
});

section.forEach((sect) =>{
 sect.classList.remove('active');
 sect.classList.remove('act-flex');
});

const element = document.getElementById(id);

element.animate([{opacity:'0.1'},{opacity:'1'}],{duration:500,fill:'forwards'});

// making diffrence in flex / block

if(element.id === 'testi'){
 element.classList.add('act-flex')
}else{
element.classList.add('active')}

} })
// Tabs end

// hamburger menu

const burger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const nav = document.querySelector('.nav-container');

burger.addEventListener('click', ()=>{
burger.classList.toggle('show');
nav.classList.toggle('show');
navbar.classList.toggle('show');
navbar.classList.add('anim');
});

// UL value is hard coded, if u wanna add more ul , eg. services/course  etc... just add more height to .nav-container. 1 ul += 8vheight.

// force Remove show class when resizing (small to big screen)

window.addEventListener('resize', removeShow);

function removeShow(){
  let minWidth = window.innerWidth = 700;
  if (minWidth) {
   burger.classList.remove('show')
    navbar.classList.remove('show');
    nav.classList.remove('show');
  }
}

// Adding Fixed navbar when passing intro section

const introSect = document.querySelector('.header_intro')



window.addEventListener('scroll', addFixed);

function addFixed() {
 let target = introSect.getBoundingClientRect().bottom;
let current = window.scrollY;

if (current >= target){
 nav.classList.add('fixed')}
else{
 nav.classList.remove('fixed')}
};

