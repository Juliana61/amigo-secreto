let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert("El campo está vacío. Digite un nombre para continuar.");
    } else {
        amigos.push(amigo);
        limpiarCaja();
        actualizarAmigo();
        return amigos;
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarAmigo() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.innerHTML = amigo;
        listaHTML.appendChild(li);
        console.log(amigos);
    });
}

function sortearAmigo() {
    if (amigos != null) {
        let indiceAleatorio =  Math.floor(Math.random()*numeroMaximo)+1;
    }
}
