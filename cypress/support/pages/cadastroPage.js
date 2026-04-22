class CadastroPage {
  visit() {
    cy.visit('/parabank/lookup.htm');
  }

  btnRegistrar() {
    cy.contains('Register').click()
  }

  btnCadastrar() {
    cy.get('input[value="Register"]').click()
  }
  
  preencherAsCredenciais(primeiroNome = '', sobreNome = '', endereco = '', cidade = '', estado = '', cep = '', phone = '', numSeguranca = '', nomeCompleto = '', senha = '') {
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
    cy.get('[name="repeatedPassword"]').type(senha)
  }

  validarUsuarioCriado(nomeCompleto = '') {
    cy.get('#rightPanel h1').should('contain', `Welcome ${nomeCompleto}`)
    cy.get('#rightPanel p').should('contain', 'Your account was created successfully. You are now logged in.')
  }
}

export default { CadastroPage };