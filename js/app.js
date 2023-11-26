// global var
var nomesInseridos = [];


function adicionar() {

    let nome = document.getElementById("nome-amigo").value;
    let listaNomes = document.getElementById("lista-amigos");


    if (nome == '') {
        alert('Você precisa inserir um nome...');

    } else {

        if (!nomesInseridos.includes(nome)) {

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



// alternate attempts:


/* number one:
<script>
        var attempts = 0;

        var lista_original = ['Bolota', 'Clebinho', 'Melissa', 'Guilherme', 'Xuoti'];
        var lista_nova = [...lista_original];


        function randomizarArray(array) {
            // Função de comparação aleatória
            function comparaAleatoria() {
                return Math.random() - 0.5;
            }

            // Usando a função sort com a comparação aleatória
            array.sort(comparaAleatoria);
        }


        function generateOrders() {
            console.log(`attempt number: ${attempts}`);
            var texto_final = '';

            for (var i = 0; i < lista_original.length; i++) {
                if (lista_original[i] == lista_nova[i]) {                    
                    return false
                } else {
                    texto_final += `${lista_original[i]} --> ${lista_nova[i]} \n`;
                    
                }
            }
            console.log(texto_final);
            return true
        }


        problem_status = false
        while (!problem_status){
            attempts++;
            randomizarArray(lista_nova);
            problem_status = generateOrders();
        }

</script>
*/


/*  number two:
<script>

var lista_original = ['Bolota', 'Clebinho', 'Melissa', 'Guilherme', 'Xuoti'];


function randomizarArray(array) {
    // Função de comparação aleatória
    function comparaAleatoria() {
        return Math.random() - 0.5;
    }

    // Usando a função sort com a comparação aleatória
    array.sort(comparaAleatoria);
}
randomizarArray(lista_original);


function getFriends(lista_atual){

    for (var i = 0; i < lista_atual.length; i++) {
        if (i == lista_atual.length-1){
            console.log(`${lista_atual[i]} --> ${lista_atual[0]}`);

        } else {
            console.log(`${lista_atual[i]} --> ${lista_atual[i+1]}`);
        
        }
    }

}
</script>
*/