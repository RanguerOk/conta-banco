var prompt = require('prompt-sync')();

export function program() {

    for(i = 0; i != 4; i){

        console.log(" \n !Ações Bancárias ! \n 1. Depósito \n 2. Saque \n 3. Saldo \n 4. Sair \n");

        var i = Number(prompt("O quê deseja fazer? "));

        switch (i) {
            case 1:
                cnt.deposito((Number(prompt("Insira o valor de depósito: "))))
                break;
            case 2:
                cnt.saque((Number(prompt("Insira o valor de saque: "))))
                break;
            case 3:
                console.log(cnt.extrato());
                break;
        
            default:

                break;
        }
    }
}