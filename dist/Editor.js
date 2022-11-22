export class Editor {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    nomeCompleto() {
        console.log('Metodo vindo da classe mae: ' + this.nome + ', ' + this.idade);
    }
}
