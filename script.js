/*========================================
AWADH GREEN DEVELOPERS
SCRIPT.JS PART-1
========================================*/


// ==============================
// SOLAR CALCULATOR
// ==============================

function calculateSolar(){

let bill =
parseFloat(
document.getElementById("bill").value
);

let units =
parseFloat(
document.getElementById("units").value
);

if(isNaN(bill)||bill<=0){

alert("Please Enter Monthly Electricity Bill");

return;

}

if(isNaN(units)||units<=0){

units=Math.round(bill/8);

}

let plant=0;

if(bill<=1500){

plant=1;

}

else if(bill<=3000){

plant=2;

}

else if(bill<=5000){

plant=3;

}

else if(bill<=8000){

plant=5;

}

else{

plant=10;

}

let monthlySaving=Math.round(bill*0.90);

let yearlySaving=monthlySaving*12;

let twentyFive=yearlySaving*25;

document.getElementById("savingAmount").innerHTML=

`
<h2>Recommended Plant : ${plant} KW</h2>

<h3>Estimated Monthly Saving</h3>

<h1>₹ ${monthlySaving}</h1>

<p>

Yearly Saving :
<strong>

₹ ${yearlySaving.toLocaleString()}

</strong>

</p>

<p>

25 Years Saving :
<strong>

₹ ${twentyFive.toLocaleString()}

</strong>

</p>

`;

}



// ==============================
// LOADER
// ==============================

window.addEventListener("load",function(){

let loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(function(){

loader.style.display="none";

},500);

});



// ==============================
// SCROLL TO TOP
// ==============================

const scrollBtn=

document.getElementById("scrollTop");

window.addEventListener("scroll",function(){

if(window.scrollY>500){

scrollBtn.style.display="flex";

}

else{

scrollBtn.style.display="none";

}

});

scrollBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};



// ==============================
// SMOOTH LINKS
// ==============================

document

.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document

.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});



// ==============================
// HEADER SHADOW
// ==============================

window.addEventListener("scroll",function(){

const header=

document.querySelector("header");

if(window.scrollY>80){

header.style.boxShadow=

"0 15px 40px rgba(0,0,0,.12)";

}

else{

header.style.boxShadow=

"0 3px 15px rgba(0,0,0,.08)";

}

});



// ==============================
// COUNTER
// ==============================

const counters=

document.querySelectorAll(".counter h2");

const speed=200;

counters.forEach(counter=>{

const update=()=>{

const target=

+counter.innerText

.replace("+","")

.replace("MW","");

const count=

+counter.innerText

.replace("+","")

.replace("MW","");

const inc=target/speed;

if(count<target){

counter.innerText=

Math.ceil(count+inc);

setTimeout(update,20);

}

};

update();

});



// ==============================
// IMAGE HOVER EFFECT
// ==============================

document

.querySelectorAll(".gallery img")

.forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});



// ==============================
// CONTACT FORM
// ==============================

const form=

document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert(

"Thank You!\nOur Team Will Contact You Soon."

);

form.reset();

});



// ==============================
// END PART-1
// ==============================/*=========================================
SCRIPT.JS PART-2
=========================================*/


// ===============================
// MOBILE MENU
// ===============================

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

menuBtn.classList.toggle("active");

});

}



// ===============================
// ACTIVE MENU ON SCROLL
// ===============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;
const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});



// ===============================
// FIX COUNTER
// ===============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const items=document.querySelectorAll(".counter h2");

items.forEach(item=>{

const target=parseInt(

item.innerText.replace(/\D/g,"")

);

let count=0;

const timer=setInterval(()=>{

count+=Math.ceil(target/100);

if(count>=target){

count=target;

clearInterval(timer);

}

if(item.innerText.includes("MW")){

item.innerHTML=count+"MW+";

}else if(item.innerText.includes("%")){

item.innerHTML=count+"%";

}else{

item.innerHTML=count+"+";

}

},20);

});

observer.disconnect();

}

});

});

const counter=document.querySelector(".counter");

if(counter){

observer.observe(counter);

}



// ===============================
// GALLERY LIGHT EFFECT
// ===============================

document.querySelectorAll(".gallery img")

.forEach(img=>{

img.onclick=function(){

this.classList.toggle("zoom");

};

});



// ===============================
// BUTTON RIPPLE
// ===============================

document.querySelectorAll(".btn")

.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

this.clientWidth,

this.clientHeight

);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});



// ===============================
// PACKAGE HOVER
// ===============================

document.querySelectorAll(".package-card")

.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});



// ===============================
// IMAGE LAZY FADE
// ===============================

const imgs=document.querySelectorAll("img");

const imgObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

imgs.forEach(img=>{

img.style.opacity="0";

img.style.transform="translateY(30px)";

img.style.transition=".8s";

imgObserver.observe(img);

});



// ===============================
// REVEAL ANIMATION
// ===============================

const reveals=document.querySelectorAll(

".card,.service-box,.product-card,.package-card,.review,.step"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

reveals.forEach(el=>{

revealObserver.observe(el);

});



// ===============================
// CURRENT YEAR
// ===============================

const year=document.querySelector("#year");

if(year){

year.innerHTML=new Date().getFullYear();

}



// ===============================
// END OF SCRIPT
// ===============================
