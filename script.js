/*=========================================
 AWADH GREEN DEVELOPERS
 script.js
 PART 8A
=========================================*/

/*==========================
Sticky Header
===========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#081522";
        header.style.padding = "0";

    } else {

        header.style.background = "rgba(8,21,34,.90)";

    }

});


/*==========================
Smooth Scroll
===========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*==========================
Active Navigation
===========================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==========================
Scroll Animation
===========================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

".service-card,.stat-card,.why-card,.feature,.project,.review-card"

).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/*==========================
Counter Animation
===========================*/

const counters = document.querySelectorAll(".counter");

const speed = 250;

const counterObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const updateCounter=(counter)=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const inc=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+inc);

setTimeout(()=>updateCounter(counter),15);

}else{

counter.innerText=target;

}

}

updateCounter(entry.target);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*==========================
Navbar Shadow
===========================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

header.style.boxShadow="0 12px 30px rgba(0,0,0,.20)";

}else{

header.style.boxShadow="none";

}

});/*=========================================
 AWADH GREEN DEVELOPERS
 script.js
 PART 8B
=========================================*/


/*==========================
FAQ Accordion
===========================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*==========================
Mobile Menu
===========================*/

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("show");

menuBtn.classList.toggle("active");

});

}


/*==========================
Close Menu After Click
===========================*/

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

if(nav){

nav.classList.remove("show");

}

if(menuBtn){

menuBtn.classList.remove("active");

}

});

});


/*==========================
Scroll To Top Button
===========================*/

const topBtn=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/*==========================
Image Hover Effect
===========================*/

document.querySelectorAll(".project img").forEach(img=>{

img.addEventListener("mousemove",(e)=>{

img.style.transform="scale(1.12)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


/*==========================
Floating Buttons Pulse
===========================*/

setInterval(()=>{

document.querySelectorAll(".whatsapp-float,.call-float").forEach(btn=>{

btn.classList.toggle("pulse");

});

},1000);


/*==========================
Preloader
===========================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});


/*==========================
Console Message
===========================*/

console.log(
"%cAwadh Green Developers",
"color:#ff7a00;font-size:24px;font-weight:bold;"
);

console.log(
"%cProfessional Solar Website Loaded Successfully",
"color:green;font-size:14px;"
);
