// cypress/e2e/auth/login.cy.js
const { LoginPage } = require('../support/pages/loginPage');
const { gerarUsuario } = require('../support/helpers/userHelper');

const loginPage = new LoginPage();
const user = gerarUsuario();

describe('Cenario de Login', () => {

  beforeEach(() => {
    loginPage.visit();
  });

  it('Devera logar com credenciais válidas', () => {
   loginPage.btnRegistrar()
   loginPage.preencherAsCredenciais(user.firstName, user.lastName, user.street, user.city, user.state, user.zipCode, user.phone, '123')
  });
});