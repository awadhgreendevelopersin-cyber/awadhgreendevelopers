/*=====================================
AWADH GREEN DEVELOPERS
script.js PART 1
=====================================*/

//==================
// Sticky Header
//==================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

//==================
// Smooth Scroll
//==================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});

//==================
// Counter Animation
//==================

const counters = document.querySelectorAll(".stat-card h2");

const speed = 100;

counters.forEach(counter=>{

const update=()=>{

const target = +counter.innerText.replace(/\D/g,'');

const count = +counter.getAttribute("data-count") || 0;

const inc = Math.ceil(target/speed);

if(count<target){

counter.setAttribute("data-count",count+inc);

counter.innerText=(count+inc)+"+";

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

}

update();

});

//==================
// Scroll Reveal
//==================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(

".service-card,.why-card,.project,.review-card"

).forEach(el=>observer.observe(el));

//==================
// Floating Buttons
//==================

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/918423948053";

whatsapp.className="whatsapp-float";

whatsapp.innerHTML='<i class="fab fa-whatsapp"></i>';

document.body.appendChild(whatsapp);

const call=document.createElement("a");

call.href="tel:8423948053";

call.className="call-float";

call.innerHTML='<i class="fa-solid fa-phone"></i>';

document.body.appendChild(call);/*=====================================
SOLAR CALCULATOR
=====================================*/

const calculateBtn = document.getElementById("calculateBtn");

if(calculateBtn){

calculateBtn.addEventListener("click",()=>{

const bill = parseFloat(document.getElementById("bill").value);

const result = document.getElementById("result");

if(isNaN(bill) || bill<=0){

result.innerHTML="Please enter a valid electricity bill.";

return;

}

let kw=1;

if(bill<1500){

kw=1;

}else if(bill<3000){

kw=2;

}else if(bill<5000){

kw=3;

}else if(bill<8000){

kw=5;

}else if(bill<12000){

kw=8;

}else{

kw=10;

}

const saving=Math.round(bill*0.85);

const price=kw*65000;

result.innerHTML=`

<h3>Recommended Plant : ${kw} kW</h3>

<p>Estimated Cost : ₹${price.toLocaleString()}</p>

<p>Monthly Saving : ₹${saving.toLocaleString()}</p>

<p>Estimated Annual Saving : ₹${(saving*12).toLocaleString()}</p>

`;

});

}

/*=====================================
EMI CALCULATOR
=====================================*/

const emiBtn=document.getElementById("emiBtn");

if(emiBtn){

emiBtn.addEventListener("click",()=>{

const loan=parseFloat(document.getElementById("loan").value);

const rate=parseFloat(document.getElementById("rate").value);

const year=parseFloat(document.getElementById("year").value);

const output=document.getElementById("emiResult");

if(isNaN(loan)||isNaN(rate)||isNaN(year)){

output.innerHTML="Enter valid values.";

return;

}

const r=rate/12/100;

const n=year*12;

const emi=(loan*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);

output.innerHTML=`

<h3>

Monthly EMI

</h3>

<h2>

₹${Math.round(emi).toLocaleString()}

</h2>

<p>

Loan Amount : ₹${loan.toLocaleString()}

</p>

<p>

Interest : ${rate}%

</p>

<p>

Duration : ${year} Years

</p>

`;

});

}

/*=====================================
BACK TO TOP BUTTON
=====================================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="topButton";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};/*=====================================
MOBILE MENU
=====================================*/

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

/*=====================================
ACTIVE MENU ON SCROLL
=====================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*=====================================
PROJECT FILTER
=====================================*/

const filters=document.querySelectorAll(".filter-btn");

const projects=document.querySelectorAll(".project");

filters.forEach(button=>{

button.addEventListener("click",()=>{

filters.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

projects.forEach(project=>{

if(filter==="all"){

project.style.display="block";

}else{

project.style.display=

project.classList.contains(filter)

?"block":"none";

}

});

});

});

/*=====================================
CONTACT FORM VALIDATION
=====================================*/

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=form.querySelector("input[type='text']").value.trim();

const phone=form.querySelector("input[type='tel']").value.trim();

if(name.length<3){

alert("Please enter your name.");

return;

}

if(phone.length!=10){

alert("Enter valid mobile number.");

return;

}

alert("Thank you! Our team will contact you soon.");

form.reset();

});

}

/*=====================================
PRELOADER
=====================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});

/*=====================================
END
=====================================*/
