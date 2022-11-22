import { Funcionario } from "./Funcionario.js";


export default class Diretor extends Funcionario {
    private nomeDiretor: string

    constructor(nomeDiretor: string, nome: string, cpf: string, endereco: string, telefone: number, salario: number) {
        super(nome, cpf, endereco, telefone, salario)
        this.nomeDiretor = nomeDiretor
    }



}




