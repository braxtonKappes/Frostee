'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Game.belongsTo(models.Category, { foreignKey: 'category' });
    }

    static async getCurrentGame(id) {
      return await Game.findByPk(id);
    }

    static async getAllGames() {
      return await Game.findAll();
    }

  }
  Game.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 60],
        notEmpty: true,
        isAlphanumeric: true
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    original_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: true
      }
    },
    current_price: {
      type: DataTypes.FLOAT,
      validate: {
        isFloat: true
      }
    },
    discount: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      },
      set(amount) {
        const originalPrice = this.getDataValue('original_price');
        const percentage = (originalPrice * (1 / (amount !== 0 ? amount : 1))).toFixed(2);
        this.setDataValue('discount', amount);
        this.setDataValue('current_price', (amount !== 0 ? originalPrice - percentage : originalPrice));
      }
    },
    review_rating: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    languages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    // category: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: { model: 'Categories' },
    //   validate: {
    //     notEmpty: true
    //   }
    // },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    developer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 40]
      }
    }
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};