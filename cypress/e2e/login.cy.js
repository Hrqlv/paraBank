const { LoginPage } = require('../support/pages/loginPage');
const { BasePage } = require('../support/pages/basePage')
const { usuario } = require('../fixtures/data')

const loginPage = new LoginPage();
const basePage = new BasePage()

describe('Cenario de Login', () => {

  beforeEach(() => {
    basePage.visit();
  });

  it('[Cenario 1] Login com dados validos', () => {
    loginPage.preencherAsCredenciais(usuario.nome, usuario.senha)
    loginPage.btnLogin()
  });

  it('[Cenario 2] Login com username inválido', () => {
    loginPage.preencherAsCredenciais('Lucas', usuario.senha)
    loginPage.btnLogin()
    loginPage.validarMensagemUsuarioInvalido()
  });
  
  it('[Cenario 3] Login com senha inválida', () => {
    loginPage.preencherAsCredenciais(usuario.nome, 'Test123!')
    loginPage.btnLogin()
    loginPage.validarMensagemSenhaInvalida()
  });

  it('[Cenario 4] Login com campos obrigatórios vazios', () => {
   loginPage.btnLogin()
   loginPage.validarMensagemCamposObrigatorios()
  });

});