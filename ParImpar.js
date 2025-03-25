const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um numero: ", (numero) => {
    let verificador = parseInt(numero)%2
    if(verificador == 1){
        console.log("Impar!")
    }
    else{
        console.log("Par!")
    }
});