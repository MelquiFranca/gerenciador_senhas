'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Acessos', [{
        localAcesso: 'www.google.com.br',
        usuario: 'melquisedeque_pereira',
        password: '123456',
        privacidade: 'Alta',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Acessos', null, {});
  }
};
