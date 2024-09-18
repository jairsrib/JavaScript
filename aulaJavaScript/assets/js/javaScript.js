let nome;
nome = "Jair de Souza Ribeiro";
console.log(nome);

let idade1, idade2, diferenca;
idade1 = 17;
idade2 = 29;
if (idade1 > idade2) {
    diferenca = idade1 - idade2;
} else {
    diferenca = idade2 - idade1;
}
console.log(diferenca);

let number1, number2;
number1 = 1;
number2 = 2.0;
let sum = number1 + number2;
console.log(sum);

let email;
email = "jair";
if (email.includes("@")) {
    console.log(email);
} else {
    console.log("insira um email válido");
}

let color;
color = ["amarelo","verde", "azul"];
console.log(color[0], color[1], color[2]);

let num;
num = 6;
if (num % 3 == 0) {
    console.log("divisivel por 3");
} else if (num % 5 == 0) {
    console.log("divisivel por 5");
} else {
    console.log("não divisivel pelos numeros impostos");
}

let a1, a2, comparar;
a1 = 3;
a2 = 5;
if (a1 > a2) {
    console.log("o primeiro numero é maior");
} else if (a2 > a1) {
    console.log("o segundo numero é maior");
} else {
    console.log("os numeros sao iguais");
}

let chuva, vento;
chuva = true;
vento = true;
if (chuva || vento) {
    console.log("vou levar um guarda chuva");
} else {
    console.log("nao preciso de um guarda chuva");
}

let b;
b = 2;
if (b < 0) {
    console.log("numero negativo");
} else if (b > 0) {
    console.log("numero positivo");
}
else if (b == 0) {
    console.log("é zero");
}

let c;
c = 3;
if (c % 2 == 0) {
    console.log("é par");
}
else if (c == 1 || c % 3 == 0) {
    console.log("é impar");
}


