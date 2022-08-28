function editar_nombre(){
let nombre= document.getElementById("nombre");
nombre.innerHTML="Alicia Saravia";
}

function ocultar(){
    let persona= document.getElementById("lista-persona-1");
    let contador= document.getElementById("contador_request");
    let valor = parseInt(contador.innerHTML);
    persona.style.display = "none";
    contador.innerHTML = valor -1;
}

function ocultar_2(){
    let persona= document.getElementById("lista-persona-2");
    let contador= document.getElementById("contador_request");
    let valor = parseInt(contador.innerHTML);
    persona.style.display = "none";
    contador.innerHTML = valor -1;
}

function aumentar(){
    let persona= document.getElementById("lista-persona-1");
    let contador= document.getElementById("contador_request");
    let conexion= document.getElementById("conexiones");
    let texto= parseInt(conexion.innerHTML);
    let valor = parseInt(contador.innerHTML);
    persona.style.display = "none";
    contador.innerHTML = valor -1;
    conexion.innerHTML= texto +1;
}

function aumentar_2(){
    let persona= document.getElementById("lista-persona-2");
    let contador= document.getElementById("contador_request");
    let conexion= document.getElementById("conexiones");
    let texto= parseInt(conexion.innerHTML);
    let valor = parseInt(contador.innerHTML);
    persona.style.display = "none";
    contador.innerHTML = valor -1;
    conexion.innerHTML= texto +1;
}