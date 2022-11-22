import Funcionario from "./Funcionario.js";
export default class Diretor extends Funcionario {
    constructor(nomeDiretor, nome, cpf, endereco, telefone, salario) {
        super(nome, cpf, endereco, telefone, salario);
        this.nomeDiretor = nomeDiretor;
    }
    mostraDadosDiretor() {
        console.log('Dados pessoais do Diretor da Empresa: ' + this.nomeDiretor, this.nome, this.cpf, this.endereco, this.telefone, this.salario);
    }
}
