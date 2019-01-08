'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cathegory = sequelize.define('Cathegory', {
    descricao: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {});
  Cathegory.associate = function(models) {
    // associations can be defined here
  };
  return Cathegory;
};