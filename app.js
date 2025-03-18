// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigos(){
    let listarAmigo = document.getElementById("amigo");
    let nombreAmigo = listarAmigo.ariaValueMax.trim();

    if(nombre === ""){ // Condición para asegurarse de que el campo no esté vacío
        alert("Por favor, inserte un nombre");
        return;
    }

    if(amigos.includes(nombreAmigo)){ // Condición para que el nombre no se repita en la lista
        alert(`${nombreAmigo} ya está en la lista`);
        return; 
    }

    amigos.push(nombreAmigo); // Añadimos el nombre a la lista Amigos.

    listarAmigo.value = ""; // Limpia el campo de texto a una cadena vacía.
}

