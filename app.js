alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random()*numeroMaximo+1);

console.log('Número secreto',numeroSecreto);//Esse comando só é possível ver no console dentro browers
let chute;
let tentativa = 1;


// Se o chute for igual ao número secreto 
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if(chute == numeroSecreto) {
        break;
    }
    else {
        if(chute > numeroSecreto){
        alert('Tem que ser um número é menor que '+chute);}
    else {
        alert('Tem que ser um número é maior que '+chute);}
    tentativa++;
    }
}

let palavratentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativa} ${palavratentativa}`);
