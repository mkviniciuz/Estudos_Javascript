const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Primeiro numero: ", (numero1) => {
    rl.question("Segundo numero: ", (numero2) => {
        let soma = parseFloat(numero1) + parseFloat(numero2);
        console.log("A soma de ambos valores é de: " + soma);
        rl.close();
    });
});