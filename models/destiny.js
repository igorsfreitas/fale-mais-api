'use strict';
module.exports = (sequelize, DataTypes) => {
  var Destiny = sequelize.define('Destiny', {
    code: DataTypes.STRING,
    origin_id: DataTypes.INTEGER,
    value_in_cents: DataTypes.INTEGER
  }, {});
  Destiny.associate = function(models) {
    models.Destiny.belongsTo(models.Origins, { foreignKey: 'origin_id' });
  };
  return Destiny;
};