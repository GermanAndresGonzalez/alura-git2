// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const amigo = document.getElementById('amigo').value;
    // validar que el valor no esté vacío
    if (amigo === '') {
        return;
    } else if (amigos.includes(amigo)) {
        alert('El amigo ya existe');
        return;
    } else {
        amigos.push(amigo);
        actualizarListaAmigos(amigos);

    }
    //amigos.push(amigo);
    document.getElementById('amigo').value = '';

}


function actualizarListaAmigos(amigos) {
    // Vaciar la lista
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Esto elimina todos los elementos dentro de la lista
    // Iterar el arreglo 'amigos' y llenar la lista
    amigos.forEach(amigo => {
        const li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigo; // Agregar el texto del amigo al <li>
        lista.appendChild(li); // Añadir el <li> a la lista <ul>
    });



}
function sortearAmigo() {
    // A partir del arreglo amigos hay que elegir une elemento con Math.random y escribirlo en el HTML
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = amigoSecreto;


}



