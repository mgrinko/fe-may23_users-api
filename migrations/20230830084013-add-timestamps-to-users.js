'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'created_at', {
      defaultValue: Sequelize.NOW,
      type: DataTypes.DATE,
    });
    await queryInterface.addColumn('users', 'updated_at', {
      defaultValue: Sequelize.NOW,
      type: DataTypes.DATE,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'created_at');
    await queryInterface.removeColumn('users', 'updated_at');
  }
};
