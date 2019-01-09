'use strict';
module.exports = (sequelize, DataTypes) => {
  var Plans = sequelize.define('Plans', {
    description: DataTypes.STRING,
    minutes: DataTypes.INTEGER,
    value_excedent_in_percent: DataTypes.INTEGER
  }, {});
  Plans.associate = function(models) {
    // associations can be defined here
  };
  return Plans;
};