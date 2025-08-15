// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crea una lista
let amigos = [];

//Funcion para agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert("Por favor, escribe un nombre");
        return;
    }


}

//Verifica si el nombre ya esta en la lista
if (amigos.includes(nombre)) {
    alert('Este nombre ya esta en la lista. Porfavor elige otro nombre diferente');
    input.value = '';
}
