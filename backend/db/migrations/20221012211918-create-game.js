'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      original_price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      current_price: {
        type: Sequelize.FLOAT,
      },
      discount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      review_rating: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
        allowNull: false
      },
      languages: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
        allowNull: false
      },
      // category: {
      //   type: Sequelize.STRING,
      //   references: { model: 'Categories' },
      //   allowNull: false
      // },
      genre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      developer: {
        type: Sequelize.STRING(40),
        allowNull: false
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
    await queryInterface.dropTable('Games');
  }
};