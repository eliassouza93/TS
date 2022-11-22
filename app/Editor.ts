import { Funcionario } from "./Funcionario"

export class Editor extends Funcionario {
    private nomeEditor: string

    constructor(nomeEditor: string, nome: string, cpf: string, endereco: string, telefone: number, salario: number) {
        super(nome, cpf, endereco, telefone, salario)
        this.nomeEditor = nomeEditor
    }



}

}





