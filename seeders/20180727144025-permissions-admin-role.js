'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Permissions', [
      {
        name: 'users:write:all',
        description: 'Permissão para criar/atualizar usuários',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },{
        name: 'users:delete:all',
        description: 'Permissão para deletar usuários',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },{
        name: 'users:read:all',
        description: 'Permissão para ver usuários',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },{
        name: 'users:write:mine',
        description: 'Permite ao usuario editar seus dados',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      },{
        name: 'users:read:mine',
        description: 'Permite listar os dados do usuario',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now')
      }
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Permissions', null, {});
  }
};
