class LoginPage {
  visit() {
    cy.visit('/parabank/lookup.htm');
  }

  btnRegistrar() {
    cy.contains('Register').click()
  }
  
  preencherAsCredenciais(primeiroNome = '', sobreNome = '', endereco = '', cidade = '', estado = '', cep = '', phone = '', numSeguranca = '') {
    cy.get('[name="customer.firstName"]').type(primeiroNome)
    cy.get('[name="customer.lastName"]').type(sobreNome)
    cy.get('[name="customer.address.street"]').type(endereco)
    cy.get('[name="customer.address.city"]').type(cidade)
    cy.get('[name="customer.address.state"]').type(estado)
    cy.get('[name="customer.address.zipCode"]').type(cep)
    cy.get('[name="customer.phoneNumber"]').type(phone)
    cy.get('[name="customer.ssn"]').type(numSeguranca)
  }
}

module.exports = { LoginPage };