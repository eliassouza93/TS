export class Editor {
    nome: string
    idade: number
    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }


    nomeCompleto() {
        console.log('Metodo vindo da classe mae: ' + this.nome + ', ' + this.idade)
    }

}


 


