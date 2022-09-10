toggler = document.querySelector('#hamburger');
menu = document.querySelector('.menu');
nav = document.querySelector('.height');
toggler.addEventListener('click', ()=>{
    nav.classList.toggle('height')
    menu.classList.toggle('visibilty');
})