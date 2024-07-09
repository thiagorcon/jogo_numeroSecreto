let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate1:3}) 
}

function exibirTextoIncial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", `Escolha um número entre 1 e ${numeroLimite}`);
}


exibirTextoIncial();

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    //numeroSecreto;
    exibirTextoNaTela("h1", `Voce  acertou!`);
    let palavraTentativas = tentativas > 1 ? `tentativas` : `tentativa`;
    let mensagem = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativas} .`;
    exibirTextoNaTela("p", `${mensagem}`);
    let removeDisable = document.getElementById("reiniciar").removeAttribute("disabled");
    //reiniciarJogo();
    
  } else {
    if (chute < numeroSecreto) {
      exibirTextoNaTela("p", `Esse número é menor, tente novamente.`);
    } else {
      exibirTextoNaTela("p", `Esse número é maior, tente novamente.`);
    }
    tentativas++;
  }
  limparOCampo();
}

//verificarChute();

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementosNaLista = numerosSorteados.length;

  if (quantidadeElementosNaLista == numeroLimite) {
    numerosSorteados = []
  }
  
  if (numerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio(); 
  } else {
    numerosSorteados.push(numeroEscolhido);
    console.log(numerosSorteados);
    return numeroEscolhido;
  }
  
}

function limparOCampo() {
  chute = document.querySelector("input");
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparOCampo();
  tentativas = 1;
  exibirTextoIncial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
