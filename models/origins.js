'use strict';
module.exports = (sequelize, DataTypes) => {
  var Origins = sequelize.define('Origins', {
    code: DataTypes.STRING
  }, {});
  Origins.associate = function(models) {
    // associations can be defined here
  };
  return Origins;
};