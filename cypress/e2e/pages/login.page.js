class LoginPage {

    constructor() {
        this.locatorErro = 'p[class="error"]';
    }

    btnLogin() {
        cy.contains('Log In').click()
    }

    preencherAsCredenciais(username = '', senha = '') {
        cy.get('[name="username"]').should('be.visible').type(username)
        cy.get('[name="password"]').should('be.visible').type(senha)
    }

    validarMensagemCamposObrigatorios() {
        cy.get(this.locatorErro).should('contain', 'Please enter a username and password.').and('be.visible')
  }
  
    validarMensagemUsuarioInvalido() {
        cy.get(this.locatorErro).should('contain', 'The username and password could not be verified.').and('be.visible')
  }

    validarMensagemSenhaInvalida() {
        cy.get(this.locatorErro).should('contain', 'The username and password could not be verified.').and('be.visible')
    }
}

export default { LoginPage };