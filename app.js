alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 11;

console.log('Número secreto',numeroSecreto);//Esse comando só é possível ver no console dentro browers
let chute;
let tentativa = 1;


// Se o chute for igual ao número secreto 
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 30');
    if(chute == numeroSecreto) {
        alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativa} tentativas`);}
    else {
        if(chute > numeroSecreto){
        alert('Tem que ser um número é menor que '+chute);}
    else {
        alert('Tem que ser um número é maior que '+chute);}
    tentativa++;
    }
}