'use strict';
module.exports = (sequelize, DataTypes) => {
  var Permissions_Roles = sequelize.define('Permissions_Roles', {
    role_id: DataTypes.INTEGER,
    permission_id: DataTypes.INTEGER
  }, {});
  Permissions_Roles.associate = function(models) {
    // associations can be defined here
  };
  return Permissions_Roles;
};