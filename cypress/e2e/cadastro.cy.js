const { CadastroPage } = require('../support/pages/cadastroPage');
const { gerarUsuario } = require('../support/helpers/userHelper');

const cadastroPage = new CadastroPage();
let user

describe('Cenario de Cadastro', () => {

  beforeEach(() => {
    user = gerarUsuario();
    cadastroPage.visit();
  });

  it('[Cenario 1] Cadastro com dados válidos', () => {
   cadastroPage.btnRegistrar()
   cadastroPage.preencherAsCredenciais(user.firstName, user.lastName, user.street, user.city, user.state, user.zipCode,
    user.phone, '123', user.username, user.password, user.password)
   cadastroPage.btnCadastrar()
   cadastroPage.validarUsuarioCriado(user.username)
  });

  it('[Cenario 2] Cadastro com campos obrigatórios vazios', () => {
   cadastroPage.btnRegistrar()
   cadastroPage.btnCadastrar()
   cadastroPage.validarMensagemCamposObrigatorios()
  });
  
  it('[Cenario 3] Cadastro com username já existente', () => {
   cadastroPage.btnRegistrar()
   cadastroPage.preencherAsCredenciais('Henrique', 'Oliveira Lima', user.street, user.city, user.state, user.zipCode,
    user.phone, '1234', 'Henrique', user.password, user.password)
   cadastroPage.btnCadastrar()
   cadastroPage.validarMensagemUsuarioExistente()
  });

  it('[Cenario 4] Cadastro de senhas que nao coincidem', () => {
   cadastroPage.btnRegistrar()
   cadastroPage.preencherAsCredenciais(user.firstName, user.lastName, user.street, user.city, user.state, user.zipCode,
    user.phone, '12345', user.username, 'Test@123', 'Test@1234')
   cadastroPage.btnCadastrar()
   cadastroPage.validarMensagemSenhasNaoCoincidem()
  });

});