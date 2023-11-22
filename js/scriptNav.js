/* Activation du menu hambuger */

let menu = document.querySelector('.myLinks')
let btn = document.querySelector('.icoBurger')

btn.addEventListener('click', function () {
    menu.classList.toggle('activeLink')
})
