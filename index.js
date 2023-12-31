let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

const section= document.querySelectorAll('section');
const navBarLink= document.querySelectorAll('header nav a');


window.onscroll =()=>{
   section.forEach(sec =>{
    let top = window.scrollY;
    let offSet = sec.offsetTop - 150;
    let hight = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if(top >= offSet && top <offSet+hight){
        navBarLink.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id+ ']').classList.add('active');
        });
    };
   }) ;
   let header = document.querySelector('header');
   header.classList.toggle('sticky',window.scrollY >100)

   menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};


// ScrollReveal({
//     reset:true,
//     distance:'80px',

//     duration:2000,
//     delay:200
// });
// ScrollReveal().reveal('.home-contain, .heading',{
//     origin:'top'
// })