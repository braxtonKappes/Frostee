'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async createUser(user) {

      const {username, email} = user;

      const newUser = await User.create({
        username,
        email
      });

      return newUser;
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 32],
        notEmpty: true,
        isAlphanumeric: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    avatar: {
      type: DataTypes.STRING,
    },
    profile_background: {
      type: DataTypes.STRING,
    },
    profile_url: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true
      }
    },
    online_status: {
      type: DataTypes.STRING,
    },
    user_bio: {
      type: DataTypes.TEXT,
      validate: {
        len: [0, 2000]
      }
    },
    user_location: {
      type: DataTypes.STRING,
    },
    user_balance: {
      type: DataTypes.FLOAT,
      validate: {
        isFloat: true
      }
    },
    owned_games: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    user_friends: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};