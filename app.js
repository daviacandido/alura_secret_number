let listaDeNumerosSorteados = [];
let chuteMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 a ${chuteMaximo}`);
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemNumeroTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        exibirTextoNaTela('p', mensagemNumeroTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'Número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'Número secreto é maior');
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * chuteMaximo + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosLista == chuteMaximo){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


exibirMensagemInicial();