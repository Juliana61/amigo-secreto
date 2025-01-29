let amigos = [];
let sorteados = [];

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
    });
}

function sortearAmigo() {
    if (amigos != null) {
        let indiceAleatorio =  Math.floor(Math.random()*amigos.length);

        if (indiceAleatorio > amigos.length) {
            return sortearAmigo();
        } else if (sorteados.length == amigos.length) {
            alert("Ya se sortearon todos los amigos.");
        } else {
            let sorteado = amigos[indiceAleatorio];
            if (sorteados.includes(sorteado)) {
                return sortearAmigo();
            } else {
                let resultado = document.getElementById('resultado');
                resultado.innerHTML = "Su amigo secreto es: " + sorteado;
                sorteados.push(sorteado);
            }
        }

    } else {
        alert("Agrega amigos antes de sortear.");
    }
}
