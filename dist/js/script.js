const menu = document.querySelector('.menu'),
      phoneMenu = document.querySelector('.menu__phone'),
      closeMenu = document.querySelector('.menu__close');


    //   mobile menu
phoneMenu.addEventListener('click', () => {
    phoneMenu.classList.add('active');
    menu.classList.add('active');

});
closeMenu.addEventListener('click', () => {
    phoneMenu.classList.remove('active');
    menu.classList.remove('active');
});