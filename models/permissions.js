'use strict';
module.exports = (sequelize, DataTypes) => {
  var Permissions = sequelize.define('Permissions', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Permissions.associate = function(models) {
    // associations can be defined here
    models.Permissions.belongsToMany(models.Roles, { through: 'Permissions_Roles', foreignKey: 'permission_id' });
  };
  return Permissions;
};