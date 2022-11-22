import { Editor } from "./Editor.js";
import { Gerente } from "./Gerente.js";
const homem = new Editor('pedro', 44);
const gerente = new Gerente(5000, 'Guilherme');
gerente.mostraGerente();
homem.nomeCompleto();
