export class Gerente {
    private salario: number
    nomeGerente: string

    constructor(salario: number, nomeGerente: string) {
        this.salario = salario
        this.nomeGerente = nomeGerente
    }
    mostraGerente(): void {
        console.log(this.nomeGerente + ', ' + this.salario)
    }


}


