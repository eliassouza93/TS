import { Funcionario } from "./Funcionario.js";
export default class Diretor extends Funcionario {
    constructor(nomeDiretor, nome, cpf, endereco, telefone, salario) {
        super(nome, cpf, endereco, telefone, salario);
        this.nomeDiretor = nomeDiretor;
    }
}
