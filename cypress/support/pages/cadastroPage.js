class CadastroPage {

  constructor() {
      this.locatorErro = 'span[class="error"]';
    }

  btnRegistrar() {
    cy.contains('Register').click()
  }

  btnCadastrar() {
    cy.get('input[value="Register"]').click()
  }
  
  preencherAsCredenciais(primeiroNome = '', sobreNome = '', endereco = '', cidade = '', estado = '', cep = '', phone = '', numSeguranca = '', nomeCompleto = '', senha = '', confirmarSenha = '') {
    cy.get('[name="customer.firstName"]').type(primeiroNome)
    cy.get('[name="customer.lastName"]').type(sobreNome)
    cy.get('[name="customer.address.street"]').type(endereco)
    cy.get('[name="customer.address.city"]').type(cidade)
    cy.get('[name="customer.address.state"]').type(estado)
    cy.get('[name="customer.address.zipCode"]').type(cep)
    cy.get('[name="customer.phoneNumber"]').type(phone)
    cy.get('[name="customer.ssn"]').type(numSeguranca)
    cy.get('[name="customer.username"]').type(nomeCompleto)
    cy.get('[name="customer.password"]').type(senha)
    cy.get('[name="repeatedPassword"]').type(confirmarSenha)
  }

  validarUsuarioCriado(nomeCompleto = '') {
    cy.get('#rightPanel h1').should('contain', `Welcome ${nomeCompleto}`)
    cy.get('#rightPanel p').should('contain', 'Your account was created successfully. You are now logged in.')
  }

  validarMensagemCamposObrigatorios() {
    cy.get(this.locatorErro).should('contain', 'First name is required.').and('be.visible')
    cy.get(this.locatorErro).should('contain', 'Last name is required.').and('be.visible')
    cy.get(this.locatorErro).should('contain', 'Address is required.').and('be.visible')
    cy.get(this.locatorErro).should('contain', 'City is required.').and('be.visible')
    cy.get(this.locatorErro).should('contain', 'State is required.').and('be.visible')
    cy.get(this.locatorErro).should('contain', 'Zip Code is required.').and('be.visible')
    cy.get(this.locatorErro).should('contain', 'Social Security Number is required.').and('be.visible')
    cy.get(this.locatorErro).should('contain', 'Username is required.').and('be.visible')
    cy.get(this.locatorErro).should('contain', 'Password is required.').and('be.visible')
    cy.get(this.locatorErro).should('contain', 'Password confirmation is required.').and('be.visible') 
  }

  validarMensagemUsuarioExistente() {
    cy.get(this.locatorErro).should('contain', 'This username already exists.').and('be.visible') 
  }
 
  validarMensagemSenhasNaoCoincidem() {
    cy.get(this.locatorErro).should('contain', 'Passwords did not match.').and('be.visible') 
  }
}

export default { CadastroPage };