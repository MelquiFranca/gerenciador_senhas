'use strict';
const crypto = require('crypto');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Usuarios', [{
        usuario: 'admin',
        senha: crypto.createHmac('sha256', 'admin').digest('hex'),
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
