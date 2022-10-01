var entrantes = document.getElementById("entrantes");
var primeros = document.getElementById("primeros");
var segundos = document.getElementById("segundos");
var postres = document.getElementById("postres");

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

