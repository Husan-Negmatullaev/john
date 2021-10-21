document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon')
    const headerBody = document.querySelector('.menu__body')
    const body = document.querySelector('body')

    menuIcon.onclick = function () {
        menuIcon.classList.toggle('_active')
        headerBody.classList.toggle('_active')
        body.classList.toggle('lock')
    }
})

// const loader = document.querySelector('.loader')

// window.addEventListener('load', () => {
//     loader.classList.remove('loader')
// })

function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector("img")) {
            ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
        }
    }
}
ibg();