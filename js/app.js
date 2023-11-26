// global var
var nomesInseridos = [];


function adicionar() {

    let nome = document.getElementById("nome-amigo").value;
    let listaNomes = document.getElementById("lista-amigos");


    if (nome == '' ) {
        alert('Você precisa inserir um nome...');

    } else {

        if (!nomesInseridos.includes(nome)){

            // interesting idea...
            if (nomesInseridos.length == 0) {
                listaNomes.innerHTML += `${nome}`;
                
            } else {
                listaNomes.innerHTML += `, ${nome}`;
                
            }
            nomesInseridos.push(nome);

        } else {
            alert('Este nome já foi inserido.');
        }
    }

    document.getElementById("nome-amigo").value = '';
}


function sortear() {

    let nomesSorteio = [...nomesInseridos];
    if (nomesSorteio.length <= 1) {
        alert('É necessário dois nomes (no mínimo) para poder sortear...');

    } else {

        isReady = false;
        while (!isReady) {
            isReady = sortNames(nomesSorteio);
        }

    }
}


function reiniciar() {

    nomesInseridos = [];

    document.getElementById("nome-amigo").value = '';

    let listaNomes = document.getElementById("lista-amigos");
    listaNomes.innerHTML = '';

    let listaResultado = document.getElementById("lista-sorteio");
    listaResultado.innerHTML = '';
}


// generates random number
function gerarNumeroAleatorio(min, max) {

    // Math.random() gera um número aleatório entre 0 (inclusive) e 1 (exclusive)
    // Multiplicamos pela diferença entre max e min e adicionamos min para ajustar o intervalo
    return Math.floor(Math.random() * (max - min) + min);
}


function sortNames(nomesSorteio) {

    let result = '';
    nomesSorteio = [...nomesInseridos];

    for (var i = nomesSorteio.length; i > 0; i--) {
        var posicao = gerarNumeroAleatorio(0, nomesSorteio.length);

        if (nomesSorteio[posicao] == nomesInseridos[i - 1]) {
            return false

        } else {
            result += `${nomesSorteio[posicao]} --> ${nomesInseridos[i - 1]} <br>`;
            nomesSorteio.splice(posicao, 1);

        }
    }

    let listaResultado = document.getElementById("lista-sorteio");
    listaResultado.innerHTML = result;

    return true
}