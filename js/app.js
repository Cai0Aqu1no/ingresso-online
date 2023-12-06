function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtd) || qtd <= 0) {
        exibirTextoNaTela('h3', 'Por favor, insira uma quantidade válida.');
        return;
    }

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    }
    else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    }
    else if (tipo.value == 'inferior') {
        comprarInferior(qtd);
    }
    document.getElementById('qtd').value = null; 
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        exibirTextoNaTela('h3', 'Quantidade indisponível para pista');
    }
    else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        exibirTextoNaTela('h3', 'Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if  (qtd > qtdSuperior) {
        exibirTextoNaTela('h3', 'Quantidade indisponível para Cadeira Superior');
    }
    else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        exibirTextoNaTela('h3', 'Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        exibirTextoNaTela('h3', 'Quantidade indisponível para Cadeira Inferior');
    }
    else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        exibirTextoNaTela('h3', 'Compra realizada com sucesso!');
    }
} 