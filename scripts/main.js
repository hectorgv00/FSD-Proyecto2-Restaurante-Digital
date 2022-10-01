window.onload = function(){AparecerTexto()}

const titulo = document.getElementById("introduccion");
const quienesSomos = document.getElementById("quienes-somos-izquierda")
const queHacemos = document.getElementById("que-hacemos")
const platos = document.getElementById("platos-estrella")

function AparecerTexto(){
    titulo.classList.add("introduccion-efecto")
}

window.onscroll = function(){FuncionScroll()};



function FuncionScroll(){
    let distanciaQuienes = window.innerHeight - quienesSomos.getBoundingClientRect().top
    let distanciaQueHacemos = window.innerHeight - queHacemos.getBoundingClientRect().top
    let distanciaPlatos = window.innerHeight - platos.getBoundingClientRect().top
    if(distanciaQuienes >= 200){
        quienesSomos.classList.add("introduccion-efecto")
    }
    if(distanciaQueHacemos >=300){
        queHacemos.classList.add("introduccion-efecto")
    }
    if(distanciaPlatos >=200){
        platos.classList.add("introduccion-efecto")

    }

}

