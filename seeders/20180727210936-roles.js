'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        name: 'Consumidor',
        description: 'Perfil genérico para todos os clientes da aplicação mobile',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        name: 'Loja',
        description: '',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
