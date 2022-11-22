export class Programador {
    constructor(codigoProgramador, nomeProgramador) {
        this.codigoProgramador = codigoProgramador;
        this.nomeProgramador = nomeProgramador;
    }
}
class Aprendiz extends Programador {
    constructor(codigoProtgramador, nomeProgramador, curso) {
        super(codigoProtgramador, nomeProgramador);
        this.curso = curso;
    }
}
