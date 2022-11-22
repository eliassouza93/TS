import Editor from "./Editor.js";
import Diretor from "./Diretor.js";
const diretor = new Diretor('JoaoDiretor', 'Empresa Google', '4444444444', 'Rua Altamiro Guimarães', 48998885555, 6800);
const editor = new Editor('PedroEditor', 'Empresa Google', '87657657657', 'Rua Emilio Cruz', 47888999955, 4200);
diretor.mostraDadosDiretor();
editor.dadosEditor();
