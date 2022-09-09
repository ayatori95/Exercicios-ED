function criarLista (e) {
    var dados = [];
    dados[e]
}

function adicionarElemento(elementos) {
    criarLista()
}


function listaSeq() {
    var adicionar = dados.push(4); // Acrescenta um item no final da lista
    console.log(dados)
    if (dados.length == 0) { // Verifica se a lista está vazia, o length servindo para indicar o tamanho dela
        console.log('Lista Vazia')
    } else if (dados.length >= tamMax) { // Verifica se a lista está cheia, com o parametro tamMax indicado comparado com o tamanho dela
        console.log('Lista está cheia')
    } else {
        function encontrar (num, nome) {
            var dado = dados[num - 1] // Encontra a posição fornecida pelo usuário e informa o valor alocado
            console.log(dado)
            dados[num-1] = nome // Substitui o valor alocado, pelo fornecido pelo usuario
            console.log(dados)
        }
        function removerEAdicionar (indice, elementos, inserir) { // indice = a partir de qual posição será a modificação // inserir = o que será acrescentado
            var dado = dados.splice(indice, elementos, inserir)  // elementos = quantos elementos serão remotivos ou substituídos, se substituídos
            console.log(dados)
           }
           
           encontrar(3, 3)
           removerEAdicionar(2, 0, 'Maça')
           removerEAdicionar(2, 1)
           console.log(dados.length)
    }

}

listaSeq()

