/* Activation du menu hambuger */

let menuLeft = document.querySelector('.myLinks')
let btn = document.querySelector('.icoBurger')

let menuCatalog = document.querySelector('#catalog')
let btnC = document.querySelector('.close')


btn.addEventListener('click', function () {
    // quand on clic sur icoBurger il se passe deux chose:
        // on ajoute la classe hidden a catalogue
    menuCatalog.classList.toggle('hidden')
        // on ajoute la classe qui modifie la taille du menu left
    menuLeft.classList.toggle('activeLink')
})



btnC.addEventListener('click', function () {
    // quand on clic sur l'icone close il se passe deux chose:
        // on retire la classe hidden a catalogue
    menuCatalog.classList.toggle('hidden')
        // on retir la classe qui modifie la taille du menu left
    menuLeft.classList.toggle('activeLink')
})
