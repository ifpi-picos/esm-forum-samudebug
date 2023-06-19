const bd = require('../bd/bd_utils.js');
const modelo = require('../modelo.js');
const repositorio = require('../repositorio_bd.js');
beforeEach(() => {
  bd.reconfig('./bd/esmforum-teste.db');
  // limpa dados de todas as tabelas
  bd.exec('delete from perguntas', []);
  bd.exec('delete from respostas', []);
});

test('testando config bd', () => {
  var mock_bd = {};

modelo.reconfig_bd(mock_bd);
expect(modelo.listar_perguntas(repositorio).length).toBe(0);
})

test('Testando banco de dados vazio', () => {
  expect(modelo.listar_perguntas(repositorio).length).toBe(0);
});

test('Testando cadastro de três perguntas', () => {
  modelo.cadastrar_pergunta(repositorio, '1 + 1 = ?');
  modelo.cadastrar_pergunta(repositorio,'2 + 2 = ?');
  modelo.cadastrar_pergunta(repositorio,'3 + 3 = ?');
  const perguntas = modelo.listar_perguntas(repositorio); 
  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('1 + 1 = ?');
  expect(perguntas[1].texto).toBe('2 + 2 = ?');
  expect(perguntas[2].num_respostas).toBe(0);
  expect(perguntas[1].id_pergunta).toBe(perguntas[2].id_pergunta-1);
});


test('Teste cadastrando resposta', () => {
  modelo.cadastrar_resposta(repositorio, 1, "2");
  const respostas = modelo.get_respostas(repositorio, 1);
  expect(respostas[0].texto).toBe("2");
});

test('Teste pegar pergunta', () => {
  modelo.cadastrar_pergunta(repositorio, '1 + 1 = ?');
  const perguntas = modelo.listar_perguntas(repositorio);
  const pergunta = modelo.get_pergunta(repositorio, perguntas[0].id_pergunta);
  expect(pergunta.texto).toBe("1 + 1 = ?");
});

test('Teste numero de respostas', () => {
  modelo.cadastrar_pergunta(repositorio, '1 + 1 = ?');
  const perguntas = modelo.listar_perguntas(repositorio);
  const num = modelo.get_num_respostas(repositorio, perguntas[0].id_pergunta);
  expect(perguntas[0].num_respostas).toBe(num);

})