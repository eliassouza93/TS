import { Funcionario } from "./Funcionario";
export class Editor extends Funcionario {
    constructor(nomeEditor, nome, cpf, endereco, telefone, salario) {
        super(nome, cpf, endereco, telefone, salario);
        this.nomeEditor = nomeEditor;
    }
}
