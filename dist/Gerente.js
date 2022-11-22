export class Gerente {
    constructor(salario, nomeGerente) {
        this.salario = salario;
        this.nomeGerente = nomeGerente;
    }
    mostraGerente() {
        console.log(this.nomeGerente + ', ' + this.salario);
    }
}
