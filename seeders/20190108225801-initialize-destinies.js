'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Destinies', [
      {
        code: '016',
        origin_id: 9,
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        code: '017',
        origin_id: 9,
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        code: '011',
        origin_id: 10,
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        code: '017',
        origin_id: 10,
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Destinies', null, {});
  }
};
