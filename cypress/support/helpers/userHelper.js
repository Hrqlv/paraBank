const { faker } = require('@faker-js/faker/locale/pt_BR');

const gerarUsuario = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const numero = faker.string.numeric(4);

  return {
    firstName,
    lastName,
    username: `${firstName}${lastName}${numero}`.replace(/\s/g, ''),
    password: faker.internet.password({ length: 10 }),
    phone: faker.phone.number('(##) 9####-####'),
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode('#####-###'),
  };
};

module.exports = { gerarUsuario };