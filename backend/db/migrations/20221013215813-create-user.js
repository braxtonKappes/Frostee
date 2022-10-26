'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      profile_background: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      profile_url: {
        type: Sequelize.STRING,
      },
      online_status: {
        type: Sequelize.STRING,
        defaultValue: 'Online'
      },
      user_bio: {
        type: Sequelize.TEXT,
        defaultValue: ''
      },
      user_location: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      user_balance: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      owned_games: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        defaultValue: []
      },
      user_friends: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        defaultValue: []
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};