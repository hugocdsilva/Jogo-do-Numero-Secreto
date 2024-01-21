alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 11;

console.log('Número secreto',numeroSecreto);//Esse comando só é possível ver no console dentro browers
let chute = prompt('Escolha um número entre 1 e 30');

// Se o chute for igual ao número secreto 
if(chute == numeroSecreto) {
    alert('Você acertou o número secreto ('+numeroSecreto+')');
}else{alert('Você errou!')}