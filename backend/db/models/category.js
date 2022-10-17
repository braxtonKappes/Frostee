'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.belongsTo(models.Game, { foreignKey: 'id' });
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        len: [3, 50],
        isAlpha: true,
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};