/* =====================================
   INITIALIZE AOS ANIMATIONS
===================================== */

if (window.AOS) {
    AOS.init({ duration:1000, once:true });
}


/* =====================================
   TYPING ANIMATION
===================================== */

if (window.Typed) {
const typed = new Typed("#typing", {

    strings:[
        "Student Developer",
        "Web Developer",
        "Python Programmer",
        "Hack Club Builder",
        "Creative Coder"
    ],

    typeSpeed:70,
    backSpeed:40,
    loop:true

});
}



/* =====================================
   DARK / LIGHT MODE
===================================== */

const themeButton = document.getElementById("theme");


themeButton.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");


    if(
        document.body.classList.contains("light-mode")
    ){

        themeButton.innerHTML =
        '<i class="fas fa-sun"></i>';

        localStorage.setItem(
            "theme",
            "light"
        );

    }

    else{

        themeButton.innerHTML =
        '<i class="fas fa-moon"></i>';

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});



// Remember theme

if(
    localStorage.getItem("theme")==="light"
){

    document.body.classList.add(
        "light-mode"
    );

    themeButton.innerHTML =
    '<i class="fas fa-sun"></i>';

}



/* =====================================
   LIVE CLOCK
===================================== */


function updateClock(){

    const clock =
    document.getElementById("clock");


    const now =
    new Date();


    clock.innerHTML =
    now.toLocaleTimeString();

}


setInterval(
    updateClock,
    1000
);


updateClock();




/* =====================================
   VISITOR COUNTER
===================================== */


let visits =
localStorage.getItem(
    "visits"
);


if(!visits){

    visits=1;

}

else{

    visits++;

}


localStorage.setItem(
    "visits",
    visits
);


document.getElementById(
    "visitorCount"
).innerHTML = visits;





/* =====================================
   SCROLL PROGRESS BAR
===================================== */


window.addEventListener(
"scroll",
()=>{


let scroll =
document.documentElement.scrollTop;


let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;


let progress =
height ? (scroll/height)*100 : 0;



document.querySelector(
".progress-bar"
).style.width =
progress+"%";


});





/* =====================================
   BACK TO TOP BUTTON
===================================== */


const topButton =
document.getElementById(
    "topBtn"
);



window.addEventListener(
"scroll",
()=>{


if(
window.scrollY > 500
){

topButton.style.display="block";

}

else{

topButton.style.display="none";

}


});



topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};





/* =====================================
   PARTICLE BACKGROUND
===================================== */


if (window.tsParticles) tsParticles.load(
"particles",
{


background:{
    color:"#050816"
},


particles:{

number:{
    value:80
},


color:{
    value:"#ffffff"
},


links:{

    enable:true,

    color:"#4da6ff",

    opacity:.3

},


move:{

    enable:true,

    speed:1

},


size:{

    value:3

}


},


interactivity:{


events:{


onHover:{

enable:true,

mode:"repulse"

}


}


}



});







/* =====================================
   MOUSE GLOW EFFECT
===================================== */


const glow =
document.createElement(
"div"
);


glow.style.position="fixed";

glow.style.width="250px";

glow.style.height="250px";

glow.style.borderRadius="50%";

glow.style.pointerEvents="none";

glow.style.background=
"radial-gradient(circle,rgba(52,120,255,.25),transparent 70%)";

glow.style.transform=
"translate(-50%,-50%)";

glow.style.zIndex="-1";


document.body.appendChild(
glow
);



document.addEventListener(
"mousemove",
(e)=>{

glow.style.left =
e.clientX+"px";


glow.style.top =
e.clientY+"px";


});








/* =====================================
   CONTACT FORM DEMO
===================================== */


const form =
document.querySelector(
"form"
);



form.addEventListener(
"submit",
(e)=>{

e.preventDefault();


alert(
"Thanks for your message! 🚀"
);


form.reset();


});








/* =====================================
   KONAMI CODE EASTER EGG
===================================== */


let code=[];


const secret=[

"ArrowUp",

"ArrowUp",

"ArrowDown",

"ArrowDown",

"ArrowLeft",

"ArrowRight",

"ArrowLeft",

"ArrowRight",

"b",

"a"

];



document.addEventListener(
"keydown",
(e)=>{


code.push(
e.key
);



if(
code.length >
secret.length
){

code.shift();

}



if(
JSON.stringify(code)
===
JSON.stringify(secret)

){

alert(
"🎉 Secret developer mode unlocked!"
);


document.body.style.animation =
"rainbow 5s infinite";


}



});






/* =====================================
   CONSOLE MESSAGE
===================================== */


console.log(
`
🚀 Welcome to my portfolio!

Built with:
HTML
CSS
JavaScript

Keep creating amazing things!
`
);