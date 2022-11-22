import Funcionario from "./Funcionario.js";
export default class Editor extends Funcionario {
    constructor(nomeEditor, nome, cpf, endereco, telefone, salario) {
        super(nome, cpf, endereco, telefone, salario);
        this.nomeEditor = nomeEditor;
    }
    dadosEditor() {
        console.log('Dados do Editro da empresa: ' + this.nomeEditor, this.nome, this.cpf, this.endereco, this.telefone, this.salario);
    }
}
