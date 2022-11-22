export class Programador {

    protected codigoProgramador: number;
    nomeProgramador: string

    constructor(codigoProgramador: number, nomeProgramador: string) {

        this.codigoProgramador = codigoProgramador
        this.nomeProgramador = nomeProgramador

    }
}
class Aprendiz extends Programador {
    private curso: string

    constructor(codigoProtgramador: number, nomeProgramador: string, curso: string) {
        super(codigoProtgramador, nomeProgramador)
        this.curso = curso

    }

}