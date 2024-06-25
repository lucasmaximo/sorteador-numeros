function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if(de > ate){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }
    if(quantidade > (ate - de + 1)){
        alert('A quantidade de números para sortear deve ser menor do que o intervalo de números. Verifique!');
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
    
        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
    
        sorteados.push(numero);
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    
    alterarStatusBotaoSortear();
    alterarStatusBotaoReiniciar();
}

function obterNumeroAleatorio(min, max){
    //a linha abaixo obtém o número aleatório, inclusive o mínimo e o máximo
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatusBotaoSortear(){
    let botao = document.getElementById('btn-sortear');
    if(botao.hasAttribute('disabled')){
        botao.removeAttribute('disabled');
    }
    else{
        botao.setAttribute('disabled', 'disabled');
    }
}

function alterarStatusBotaoReiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
    else{
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotaoSortear();
    alterarStatusBotaoReiniciar();
}