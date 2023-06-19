const bd = {
    perguntas: [{
        "id": 1,
        "texto": "Qual a capital de MG?",
        "id_usuario": 1,
      },
      {
        "id": 2,
        "texto": "Qual a capital de RJ?",
        "id_usuario": 1,
      },
      {
        "id": 3,
        "texto": "Qual a capital de SP?",
        "id_usuario": 1,
      }],
    respostas: []
};

function recuperar_todas_perguntas() {
    return bd.perguntas.map((el) => {
        const num_respostas = recuperar_num_respostas(el.id);
        return {...el, num_respostas};
    });
}

function recuperar_pergunta(id_pergunta) {
    return bd.perguntas.find(el => el.id == id_pergunta);
}

function recuperar_todas_respostas(id_pergunta) {
    return bd.respostas.filter(el => el.id_pergunta == id_pergunta);
}

function recuperar_num_respostas(id_pergunta) {
    return recuperar_todas_respostas(id_pergunta).length;
}

function criar_pergunta(texto) {
    bd.perguntas.push({id: bd.perguntas.length, texto});
}

function criar_resposta(id_pergunta, texto) {
    bd.respostas.push({id: bd.respostas.length, texto, id_pergunta});
}

exports.recuperar_todas_perguntas = recuperar_todas_perguntas;
exports.recuperar_pergunta = recuperar_pergunta;
exports.recuperar_todas_respostas = recuperar_todas_respostas;
exports.recuperar_num_respostas = recuperar_num_respostas;
exports.criar_pergunta = criar_pergunta;
exports.criar_resposta = criar_resposta;