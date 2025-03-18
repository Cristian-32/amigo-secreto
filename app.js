// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Se crea función para agregar amigos a la lista.
function agregarAmigo(){
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
        li.textContent = amigos[i]; // Asigna el nombre a li
        listaAmigos.appendChild(li); // Agrega el elemnto li en el DOM
    }
}

//agregarAmigos();

function sortearAmigo(){
    if(amigos.length === 0){ // Condición para verificar que haya al menos un nombre en la lista.
        alert("No hay nombres en la lista")
        return;
    }
    let nombreSorteado = Math.floor(Math.random() * amigos.length); // Número random entre 0 y final longitud de la lista
    let amigoSecreto = amigos[nombreSorteado]; // Almacena el nombre sorteado.

    let resultado = document.getElementById("resultado"); 
    resultado.innerHTML = `Amigo secreto ${amigoSecreto}`; // Muestra el amigo secreto sorteado.
}

