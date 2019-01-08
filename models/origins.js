'use strict';
module.exports = (sequelize, DataTypes) => {
  var Origins = sequelize.define('Origins', {
    code: DataTypes.STRING
  }, {});
  Origins.associate = function(models) {
    models.Origins.hasMany(models.Destiny, {foreignKey: 'origin_id'});
  };
  return Origins;
};