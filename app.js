// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Se crea función para agregar amigos a la lista.
function agregarAmigos(){
    let lista = document.getElementById("amigo");
    let nombreAmigo = lista.value.trim();

    if(nombreAmigo === ""){ // Condición para asegurarse de que el campo no esté vacío
        alert("Por favor, inserte un nombre");
        return;
    }

    if(amigos.includes(nombreAmigo)){ // Condición para que el nombre no se repita en la lista
        alert(`${nombreAmigo} ya está en la lista`);
        return; 
    }

    amigos.push(nombreAmigo); // Añadimos el nombre a la lista Amigos.

    lista.value = ""; // Limpia el campo de texto a una cadena vacía.

    actualizarLista(); // Llamamos a la función 
}

// Se crea función para actualizar la lista

function actualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Borra los nombres de la lista anterior

    for(let i = 0; i < amigos.length; i++){ // Recorre la lista Amigos
        let li = document.createElement("li"); // Crea elemento li para la lista
        li.textContent = amigos[i]; 
        listaAmigos.appendChild(li);
    }
}

