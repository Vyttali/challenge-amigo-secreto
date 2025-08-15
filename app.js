// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crea una lista
let amigos = [];

// Funcion para agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert("Por favor, escribe un nombre válido");
        return;
    }

// Verificar que el nombre no se repita
    if (amigos.includes(nombre)) {
        alert('Este nombre ya esta en la lista, porfavor elegi otro');
        input.value = '';
        return;
    }

// Agregar el nombre al array
    amigos.push(nombre);
    const lista = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li)

// Limpiar el input
    input.value = '';
}

