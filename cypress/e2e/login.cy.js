const { CadastroPage } = require('../support/pages/cadastroPage');
const { gerarUsuario } = require('../support/helpers/userHelper');

const cadastroPage = new CadastroPage();
const user = gerarUsuario();

describe('Cenario de Cadastro', () => {

  beforeEach(() => {
    cadastroPage.visit();
  });

  it('Devera cadastrar com credenciais válidas', () => {
   cadastroPage.btnRegistrar()
   cadastroPage.preencherAsCredenciais(user.firstName, user.lastName, user.street, user.city, user.state, user.zipCode,
    user.phone, '123', user.fullName, user.password, user.password)
   cadastroPage.btnCadastrar()
   cadastroPage.validarUsuarioCriado(user.fullName)
  });
});