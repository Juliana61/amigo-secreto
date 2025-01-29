// Arreglo para almacenar la lista de amigos ingresados por el usuario
let amigos = []; 

// Arreglo para almacenar los amigos que ya han sido sorteados
let sorteados = [];

/**
 * Función para agregar un amigo a la lista.
 * Obtiene el valor del campo de entrada, verifica que no esté vacío,
 * lo agrega al arreglo `amigos`, limpia el campo de entrada y actualiza la lista en la interfaz.
 */
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value; // Obtiene el valor del input

    if (amigo == '') { // Verifica si el campo está vacío
        alert("El campo está vacío. Digite un nombre para continuar.");
    } else {
        amigos.push(amigo); // Agrega el nombre al arreglo `amigos`
        limpiarCaja(); // Limpia el campo de entrada
        actualizarAmigo(); // Actualiza la lista mostrada en pantalla
        return amigos; // Retorna la lista actualizada de amigos
    }
}

/**
 * Función para limpiar el campo de entrada después de agregar un amigo.
 */
function limpiarCaja() {
    document.querySelector('#amigo').value = ''; // Establece el campo de entrada como vacío
}

/**
 * Función para actualizar la lista de amigos en la interfaz de usuario.
 * Borra el contenido actual de la lista y vuelve a generarlo con los amigos almacenados en `amigos`.
 */
function actualizarAmigo() {
    let listaHTML = document.getElementById('listaAmigos'); // Obtiene el elemento HTML donde se mostrará la lista
    listaHTML.innerHTML = ""; // Limpia la lista antes de actualizarla

    amigos.forEach((amigo) => { // Itera sobre el arreglo `amigos`
        let li = document.createElement("li"); // Crea un nuevo elemento de lista (<li>)
        li.innerHTML = amigo; // Asigna el nombre del amigo al elemento de lista
        listaHTML.appendChild(li); // Agrega el elemento a la lista en la interfaz
    });
}

/**
 * Función para sortear un amigo al azar.
 * Verifica si hay amigos disponibles para sortear, selecciona uno aleatoriamente y evita repeticiones.
 */
function sortearAmigo() {
    if (amigos.length === 0) { // Verifica si hay amigos en la lista
        alert("Agrega amigos antes de sortear."); 
        return;
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un índice aleatorio

        if (sorteados.length == amigos.length) { // Verifica si ya se sortearon todos los amigos
            alert("Ya se sortearon todos los amigos.");
            return;
        } else {
            let sorteado = amigos[indiceAleatorio]; // Obtiene el amigo seleccionado aleatoriamente
            
            if (sorteados.includes(sorteado)) { // Si el amigo ya fue sorteado, vuelve a ejecutar la función
                return sortearAmigo();
            } else {
                let resultado = document.getElementById('resultado'); // Obtiene el elemento donde se mostrará el resultado
                resultado.innerHTML = "Su amigo secreto es: " + sorteado; // Muestra el nombre del amigo sorteado
                sorteados.push(sorteado); // Agrega el amigo sorteado al arreglo `sorteados`
            }
        }
    }
}
