'use strict';
module.exports = (sequelize, DataTypes) => {
  const acesso = sequelize.define('Acesso', {
    localAcesso: DataTypes.STRING,
    usuario: DataTypes.STRING,
    password: DataTypes.STRING,
    privacidade: DataTypes.ENUM('Normal', 'Alta')
  }, {});
  acesso.associate = function(models) {
    // associations can be defined here
  };
  return acesso;
};