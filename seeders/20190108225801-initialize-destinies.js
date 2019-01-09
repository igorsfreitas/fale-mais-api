'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Destinies', [
      {
        code: '016',
        origin_id: 1,
        value_in_cents: 190,
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        code: '011',
        origin_id: 2,
        value_in_cents: 290,
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        code: '017',
        origin_id: 1,
        value_in_cents: 170,
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        code: '011',
        origin_id: 3,
        value_in_cents: 270,
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        code: '018',
        origin_id: 1,
        value_in_cents: 90,
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
      {
        code: '011',
        origin_id: 4,
        value_in_cents: 190,
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Destinies', null, {});
  }
};
