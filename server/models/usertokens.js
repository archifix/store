'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usersTokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usersTokens.init({
    userId: DataTypes.INTEGER,
    token: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'usersTokens',
  });
  return usersTokens;
};