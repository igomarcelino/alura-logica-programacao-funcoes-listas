
let tentativas = 1;
let venceuJogo = false;
let botaoReiniciar = document.getElementById("reiniciar");
let botaoChutar = document.getElementById("chutar");
let jogadores = [];
let totalJogadores = 2;
let nJogador = 0;
let inputJogador = document.getElementById("input_jogador");
let botaoEnviar = document.getElementById("btnEnviar");
let botaoIniciar = document.getElementById("iniciar");
let h3Jogadores = document.querySelector("h3");
let contarVezJogador = 0;
let vezChute = 0;
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 30 + 1);
}

let numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio);

let intervaloNumeros = parseInt(numeroAleatorio * 8 / 3);

console.log(jogadores);

// funcoes com parametros
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

exibirMensagemInicial();

limparCampo();
function verificarChute() {
    
    let chute = document.getElementById("chute").value; // utilizado para capturar valor que esta dentro do input
    // verifica de quem e a vez
    
    exibirTextoNaTela("h1", `${jogadores[vezChute]} e a sua vez!`);
    if (chute == numeroAleatorio) {
        exibirTextoNaTela("h1", `Parabens! ${jogadores[vezChute]} Voce venceu`);
        tentativas == 1 ? exibirTextoNaTela("p", "Voce Acertou de primeira") : exibirTextoNaTela("p", `Voce acertou com ${tentativas} tentativas!`);
        botaoReiniciar.removeAttribute("disabled");
        botaoChutar.setAttribute("disabled", true);
    } else {
        tentativas++;
        contarVezJogador++;
        vezChute = contarVezJogador % 2;
        if (chute > numeroAleatorio) {
            exibirTextoNaTela("p", "Voce chutou alto");
        } else {
            exibirTextoNaTela("p", "Voce chutou baixo");
        }
        chute.value="";
        exibirTextoNaTela("h1", `${jogadores[vezChute]} e a sua vez!`);

    }
}



function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    nJogador = 0;
    exibirMensagemInicial();
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Numero Secreto");
    exibirTextoNaTela("p", `Escolha um numero entre 1 e ${intervaloNumeros}`);
}

function capturarNomeJogador(){
    
    if(jogadores.length == 2){
        botaoIniciar.removeAttribute("disabled");
        exibirTextoNaTela("h3", "Jogadores completos!")
    }else{
        exibirTextoNaTela("h3", `Insira outro jogador`)
        jogadores[nJogador] = inputJogador.value;
        inputJogador.value = "";
        if(jogadores.length == 2){
            botaoIniciar.removeAttribute("disabled");
            exibirTextoNaTela("h3", "Jogadores completos!")

        }
    }
    nJogador++;
console.log(jogadores);
}



function iniciarJogo() {
    if (jogadores.length == 2) {
        exibirTextoNaTela("h1", `${jogadores[vezChute]} e a sua vez!`);
        exibirTextoNaTela("p", `Escolha um numero entre 1 e ${intervaloNumeros}`);
        botaoChutar.removeAttribute("disabled");
        chute.removeAttribute("disabled");
        hidenElements();
        
    } else {
        exibirTextoNaTela("h1", "Iserir Jogadores!");
    }
    nJogador = 0;
}

function hidenElements(){
    h3Jogadores.setAttribute("hidden",true);
    inputJogador.setAttribute("style","display:none");
    botaoEnviar.setAttribute("hidden",true);
    botaoIniciar.setAttribute("hidden",true);
}

function showElements(){
    h3Jogadores.removeAttribute("hidden");
    inputJogador.removeAttribute("hidden");
    botaoEnviar.removeAttribute("hidden");
    botaoIniciar.removeAttribute("hidden");
}

function limparCampo() {
    chute = document.getElementById("chute");
    chute.value = "";
    botaoReiniciar.setAttribute("disabled", true);
    botaoChutar.setAttribute("disabled", true);
    chute.setAttribute("disabled", true);
    botaoIniciar.setAttribute("disabled", true);
    nJogador = 0;
    showElements();
}



