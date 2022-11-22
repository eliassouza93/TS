
export class Funcionario {
    nome: string
    cpf: string
    endereco: string
    salario: number
    telefone: number
    constructor(nome: string, cpf: string, endereco: string, telefone: number, salario: number) {
        this.nome = nome
        this.cpf = cpf
        this.endereco = endereco
        this.telefone = telefone
        this.salario = salario
    }
}