const { faker } = require('@faker-js/faker/locale/pt_BR');

const gerarUsuario = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password({ length: 10 }),
  phone: faker.phone.number('(##) 9####-####'),
  cpf: faker.string.numeric(11),
  street: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  zipCode: faker.location.zipCode('#####-###'),
});

module.exports = { gerarUsuario };