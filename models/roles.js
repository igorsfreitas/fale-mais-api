'use strict';
module.exports = (sequelize, DataTypes) => {
  var Roles = sequelize.define('Roles', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Roles.associate = function(models) {
    models.Roles.belongsToMany(models.Permissions, { through: 'Permissions_Roles', foreignKey: 'role_id' });
  };
  return Roles;
};