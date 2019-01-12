let nav = document.querySelector('.nav-container')
let stick = nav.offsetTop;

window.onscroll = () => myFunction();

function myFunction(){
    if(window.pageYOffset > stick){
        nav.classList.add('fixed-nav');
    } else{
        nav.classList.remove('fixed-nav')
    }
}