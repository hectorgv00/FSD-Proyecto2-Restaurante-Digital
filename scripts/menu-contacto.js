window.onload = function(){AparecerTexto()}
const titulo = document.getElementById("introduccion");
const aparecer = document.getElementById("aparecer")

// Aparece texto al cargar

function AparecerTexto(){
    titulo.classList.add("introduccion-efecto")
}

// Aparece al hacer scroll

window.onscroll = function(){FuncionScroll()};

function FuncionScroll(){
    let distanciaAparecer = window.innerHeight - aparecer.getBoundingClientRect().top
        if(distanciaAparecer >= 200){
        aparecer.classList.add("introduccion-efecto")
    }


}




// ----------Funciones menu----------

const entrantes = document.getElementById("entrantes");
const primeros = document.getElementById("primeros");
const segundos = document.getElementById("segundos");
const postres = document.getElementById("postres");

function Entrantes(){


    if( entrantes.classList.value == "container mt-3 mb-3 noDisplay"){
        entrantes.classList.remove("noDisplay")
        primeros.classList.add("noDisplay")
        segundos.classList.add("noDisplay")
        postres.classList.add("noDisplay")        
    }
}

function Primeros(){


    if( primeros.classList.value == "container mt-3 mb-3 noDisplay"){
        primeros.classList.remove("noDisplay")
        entrantes.classList.add("noDisplay")
        segundos.classList.add("noDisplay")
        postres.classList.add("noDisplay")        
    }
}

function Segundos(){

    if( segundos.classList.value == "container mt-3 mb-3 noDisplay"){
        segundos.classList.remove("noDisplay")
        primeros.classList.add("noDisplay")
        entrantes.classList.add("noDisplay")
        postres.classList.add("noDisplay")        
    }
}

function Postres(){

    if( postres.classList.value == "container mt-3 mb-3 noDisplay"){
        postres.classList.remove("noDisplay")
        primeros.classList.add("noDisplay")
        entrantes.classList.add("noDisplay")
        segundos.classList.add("noDisplay")        
    }
}

