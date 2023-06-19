var bd = require('./bd/bd_utils.js');

// usada pelo teste de unidade
// para que o modelo passe a usar uma versão "mockada" de bd
function reconfig_bd(mock_bd) {
  bd = mock_bd;
}

// listar_perguntas retorna um array de objetos com os seguintes campos:
// { id_pergunta: int
//   texto: int
//   id_usuario: int
//   num_respostas: int 
// }
function listar_perguntas(repositorio) {
  return repositorio.recuperar_todas_perguntas();
}

function cadastrar_pergunta(repositorio, texto) {
  repositorio.criar_pergunta(texto);
}

function cadastrar_resposta(id_pergunta, texto) {
  repositorio.criar_resposta(id_pergunta, texto);
}

function get_pergunta(repositorio, id_pergunta) {
  return repositorio.recuperar_pergunta(id_pergunta);
}

function get_respostas(repositorio, id_pergunta) {
  return repositorio.recuperar_todas_respostas(id_pergunta);
}

function get_num_respostas(repositorio, id_pergunta) {
  return repositorio.recuperar_num_respostas(id_pergunta);
}

exports.reconfig_bd = reconfig_bd;
exports.listar_perguntas = listar_perguntas;
exports.cadastrar_pergunta = cadastrar_pergunta;
exports.cadastrar_resposta = cadastrar_resposta;
exports.get_pergunta = get_pergunta;
exports.get_respostas = get_respostas;
exports.get_num_respostas = get_num_respostas;