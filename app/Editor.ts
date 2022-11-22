import Funcionario from "./Funcionario.js"

export default class Editor extends Funcionario {
    private nomeEditor: string

    constructor(nomeEditor: string, nome: string, cpf: string, endereco: string, telefone: number, salario: number) {
        super(nome, cpf, endereco, telefone, salario)
        this.nomeEditor = nomeEditor
    }

    dadosEditor(): void {
        console.log('Dados do Editro da empresa: ' + this.nomeEditor, this.nome, this.cpf, this.endereco, this.telefone, this.salario)


    }



}






